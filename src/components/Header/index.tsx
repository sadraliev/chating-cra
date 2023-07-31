import { FC, ReactNode } from "react";

interface HeaderProps {
  text: string;
  icon?: ReactNode;
  shadow?: boolean;
}

export const Header: FC<HeaderProps> = ({ text, icon, shadow = false }) => {
  const style = `header header--sticky flex  items-center text-black text-lg font-bold py-20 pl-16 ${
    shadow ? "shadow-inset-top-thin-dark" : ""
  }`;
  return (
    <div className={style}>
      {icon && <div className="w-20 h-20 mr-8">{icon}</div>}
      <div>{text}</div>
    </div>
  );
};
