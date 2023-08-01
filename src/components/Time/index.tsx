import { FC } from "react";
import { convertTimestampToTime } from "../../utils/helpers";
import IconFactory from "../Icons";

interface TimeProps {
  my?: boolean;
  datetime: number;
}

export const Time: FC<TimeProps> = ({ datetime, my = false }) => {
  return (
    <span className="time">
      {convertTimestampToTime(datetime)}
      {my && <IconFactory name="delivery" />}
    </span>
  );
};
