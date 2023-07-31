import { FC, useState } from "react";
import { Avatar } from "../Avatar";
import { truncateText } from "../../utils/helpers";
import { AUTHOR_MAX_LENGTH, MESSAGE_MAX_LENGTH } from "../../constants/text";

interface ChatItemListProps {
  image: string;
  author: string;
  time: string;
  message: string;
  selectedChatId: string;
  chatId: string;
  onClick: (chatId: string) => void;
}

export const ChatItemList: FC<ChatItemListProps> = ({
  image,
  author,
  message,
  time,
  selectedChatId,
  chatId,
  onClick,
}) => {
  const handlerClick = () => {
    onClick(chatId);
  };

  const isSelect = chatId === selectedChatId;
  return (
    <li
      onClick={handlerClick}
      className={`px-16 py-16 flex items-center ${
        isSelect ? "chat-item--selected" : "chat-item"
      }`}
    >
      <div className="mr-16">
        <Avatar src={image} size="md" />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <div className="text-black text-base font-bold">
            {truncateText(author, AUTHOR_MAX_LENGTH)}
          </div>
          <div className="text-gray-light text-sm">{time}</div>
        </div>
        <div className="text-gray-light text-base chat-name">
          {truncateText(message, MESSAGE_MAX_LENGTH)}
        </div>
      </div>
    </li>
  );
};
