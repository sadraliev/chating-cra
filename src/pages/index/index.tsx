import React, { FC, useState } from "react";
import { IPage } from "../../interface/page";
import { Header } from "../../components/Header";
import IconFactory from "../../components/Icons";
import { CHAT_TITLE, DIALOG_TITLE } from "../../constants/text";
import useQuery from "../../hooks/useQuery";
import { getChatList, getMessageList } from "../../api/chat";
import { ChatItemList } from "../../components/ChatItemList";
import { ChatResponse } from "../../interface/api/chat.response";
import { convertTimestampToTime } from "../../utils/helpers";
import { Message } from "../../components/Message";
import useLazyQuery from "../../hooks/useLazyQuery";
import { MessageResponse } from "../../interface/api/message.response";

export const PageIndex: FC<IPage> = (props: IPage) => {
  const [chatId, setChatId] = useState<string>("");
  const [chats, chatsLoader, chatError] = useQuery<ChatResponse[]>(
    "chats",
    getChatList
  );

  const [fetchMessages, messages, messageError, messageLoader] = useLazyQuery<
    MessageResponse[]
  >("messages", getMessageList);
  const handleChat = (chatId: string) => {
    console.log("chatId", chatId);
    setChatId(chatId);
    fetchMessages(chatId);
  };

  return (
    <div className="container">
      <div className="flex">
        <ul className="chats">
          <Header text={CHAT_TITLE} />

          {chats?.map(chat => (
            <ChatItemList
              key={chat.id}
              selectedChatId={chatId}
              chatId={chat.id}
              onClick={handleChat}
              image={chat.avatar}
              author={`${chat.last_message.user_name} ${chat.last_message.user_surname}`}
              time={convertTimestampToTime(chat.last_message.created_at)}
              message={chat.last_message.message}
            />
          ))}
        </ul>
        <div className="dialog w-full">
          <Header
            shadow
            text={DIALOG_TITLE}
            icon={<IconFactory name="bubble" />}
          />
          <Message messages={messages} isLoading={messageLoader} />
          <div className="footer footer--sticky">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            tempora deleniti eos!
          </div>
        </div>
      </div>
    </div>
  );
};
