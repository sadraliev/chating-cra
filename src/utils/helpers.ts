import dayjs from "dayjs";

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
