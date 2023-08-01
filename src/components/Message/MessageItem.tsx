import React from "react";
import { MessageResponse } from "../../interface/api/message.response";
import { Avatar } from "../Avatar";
import { Time } from "../Time";

interface MessageItemProps {
  message: MessageResponse;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  if (message.user.you) {
    return (
      <div className="flex justify-end">
        <div>
          <p className="my-4 message rounded-base bg-gray-lighter text-base text-dark">
            {message.message}
            <span className="message--time">
              <Time datetime={message.created_at} my={message.user.you} />
            </span>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex">
      <div className="mr-8">
        <Avatar src={message.user.avatar} />
      </div>
      <div>
        <p className="text-base font-bold m-0">{`${message.user.name} ${message.user.surname}`}</p>

        <p className="my-4 message rounded-base bg-gray-lighter text-base text-dark">
          {message.message}
          <span className="message--time">
            <Time datetime={message.created_at} my={message.user.you} />
          </span>
        </p>
      </div>
    </div>
  );
};
