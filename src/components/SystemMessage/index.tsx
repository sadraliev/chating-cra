import React from "react";

interface SystemMessageProps {
  message: string;
}

export const SystemMessage: React.FC<SystemMessageProps> = ({ message }) => {
  return (
    <div className="flex justify-center rounded-base my-8 text-xs text-dark">
      <span className="flex justify-center items-center px-12 py-8 bg-blue-light">
        {message}
      </span>
    </div>
  );
};
