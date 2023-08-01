import dayjs from "dayjs";
import { MessageResponse } from "../interface/api/message.response";

export function truncateText(text: string, length: number): string {
  if (!text.length) {
    return "";
  }
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

export function convertTimestampToTime(timestamp: number) {
  return dayjs(timestamp * 1000).format("HH:mm");
}
export function convertTimestampToDate(timestamp: number) {
  return dayjs(timestamp * 1000).format("DD.MM.YYYY");
}

interface GroupedMessages {
  date: string;
  messages: MessageResponse[];
}

export function groupMessagesByDate(
  messages: MessageResponse[]
): GroupedMessages[] {
  return messages.reduce((acc: GroupedMessages[], message) => {
    const dateKey = convertTimestampToDate(message.created_at);

    const foundGroup = acc.find(group => group.date === dateKey);

    if (foundGroup) {
      foundGroup.messages.push(message);
    } else {
      acc.push({ date: dateKey, messages: [message] });
    }

    return acc;
  }, []);
}

export function sortGroupedMessages(
  groupedMessages: GroupedMessages[]
): GroupedMessages[] {
  return groupedMessages.sort((a, b) => {
    const dateA = new Date(a.date.split(".").reverse().join("-"));
    const dateB = new Date(b.date.split(".").reverse().join("-"));

    return dateA.getTime() - dateB.getTime();
  });
}
interface SplitMessages {
  newMessages: GroupedMessages[];
  oldMessages: GroupedMessages[];
}

export function splitMessagesByStatus(
  groupedMessages: GroupedMessages[]
): SplitMessages {
  const newMessages = groupedMessages.filter(group =>
    group.messages.some(msg => msg.is_new)
  );
  const oldMessages = groupedMessages.filter(
    group => !group.messages.some(msg => msg.is_new)
  );

  return {
    newMessages,
    oldMessages,
  };
}
