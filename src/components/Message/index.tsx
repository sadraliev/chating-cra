import { FC } from "react";
import { MessageResponse } from "../../interface/api/message.response";
import {
  groupMessagesByDate,
  sortGroupedMessages,
  splitMessagesByStatus,
} from "../../utils/helpers";
import { SystemMessage } from "../SystemMessage";
import { NewMessages } from "../SystemMessage/NewMessage";
import { MessageItem } from "./MessageItem";
import useScrollToBottom from "../../hooks/useScrollToBottom";

interface MessageProps {
  messages: MessageResponse[] | null;
  isLoading: boolean;
}

export const Message: FC<MessageProps> = ({ messages }) => {
  useScrollToBottom();

  if (!messages || !messages.length) {
    return null;
  }
  const groupedMessages = groupMessagesByDate(messages);
  const sortedGroupedMessages = sortGroupedMessages(groupedMessages);
  const { newMessages, oldMessages } = splitMessagesByStatus(
    sortedGroupedMessages
  );

  return (
    <>
      {oldMessages?.map(group => (
        <div>
          <SystemMessage message={group.date} />
          {group.messages.map(message => (
            <MessageItem message={message} />
          ))}
        </div>
      ))}
      {newMessages?.length > 0 && (
        <>
          <NewMessages />
          {newMessages?.map(group => (
            <div>
              <SystemMessage message={group.date} />
              {group.messages.map(message => (
                <MessageItem message={message} />
              ))}
            </div>
          ))}
        </>
      )}
    </>
  );
};
