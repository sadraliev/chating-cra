import React, { FC } from "react";
import { IPage } from "../../interface/page";
import { Avatar } from "../../components/Avatar";

export const PageIndex: FC<IPage> = (props: IPage) => {
  const { title } = props;

  return (
    <div className="container">
      <div className="chats">
        <Avatar />
      </div>
      <div className="message"></div>
    </div>
  );
};
