import { FC } from "react";
import { IAvatar } from "./interface";
import "./avatar.scss";

export const Avatar: FC<IAvatar> = (props: IAvatar) => {
  const { src, size = "sm" } = props;

  const className = `component-avatar component-avatar--${size}`;

  return (
    <div className={className}>
      <img width="48px" height="48px" src={src} alt="" />
    </div>
  );
};
