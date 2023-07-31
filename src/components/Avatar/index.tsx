import { FC } from "react";
import { IAvatar } from "./interface";
import "./avatar.scss";

export const Avatar: FC<IAvatar> = (props: IAvatar) => {
  const {
    src = "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    size = "sm",
  } = props;

  const className = `component-avatar component-avatar--${size}`;

  return (
    <div className={className}>
      <img src={src} />
    </div>
  );
};
