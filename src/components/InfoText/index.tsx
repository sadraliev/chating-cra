import React from "react";

interface InfoTextProps {
  text: string;
}

export const InfoText: React.FC<InfoTextProps> = ({ text }) => {
  return (
    <div className="h-screen flex justify-center items-center text-xl">
      {text}
    </div>
  );
};
