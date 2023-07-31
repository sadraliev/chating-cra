import React, { FC } from "react";
import { IPage } from "../../interface/page";
import { Avatar } from "../../components/Avatar";
import { Header } from "../../components/Header";
import IconFactory from "../../components/Icons";
import { CHAT_TITLE, DIALOG_TITLE } from "../../constants/text";

export const PageIndex: FC<IPage> = (props: IPage) => {
  const { title } = props;

  return (
    <div className="container">
      <div className="flex">
        <div className="chats">
          <Header text={CHAT_TITLE} />
        </div>
        <div className="dialog w-full">
          <Header
            shadow
            text={DIALOG_TITLE}
            icon={<IconFactory name="bubble" />}
          />
        </div>
      </div>
    </div>
  );
};
