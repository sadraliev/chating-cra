import { FC, SVGProps } from "react";

import { BubbleIcon } from "./Bubble";
import { PlaneIcon } from "./Plane";
import { ClipIcon } from "./Clip";
import { DeliveredIcon } from "./Delivered";

const icons = {
  bubble: BubbleIcon,
  plane: PlaneIcon,
  clip: ClipIcon,
  delivery: DeliveredIcon,
};

type IconName = keyof typeof icons;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

const IconFactory: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent {...props} />;
};

export default IconFactory;
