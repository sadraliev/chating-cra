import { FC } from "react";
import { Avatar } from "../Avatar";
import { MessageResponse } from "../../interface/api/message.response";
import {
  convertTimestampToTime,
  groupMessagesByDate,
  sortGroupedMessages,
  splitMessagesByStatus,
} from "../../utils/helpers";
import { SystemMessage } from "../SystemMessage";
import { NewMessages } from "../SystemMessage/NewMessage";
import { MessageItem } from "./MessageItem";

interface MessageProps {
  messages: MessageResponse[] | null;
  isLoading: boolean;
}

export const Message: FC<MessageProps> = ({ messages }) => {
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
                <div className="flex">
                  <div>
                    <Avatar src={message.user.avatar} />
                  </div>
                  <div>
                    <p></p>
                    <div></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </>
  );
};
