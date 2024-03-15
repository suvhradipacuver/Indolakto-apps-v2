import Tippy from "@tippyjs/react";
import { ReactNode } from "react";
import "tippy.js/dist/tippy.css"; // optional
import { TooltipPosition } from "../../types";

interface Props {
  children: JSX.Element;
  content: string | ReactNode;
  position?: TooltipPosition;
}

const Tooltip = ({ children, content, position = "bottom" }: Props) => {
  return (
    <Tippy content={content} placement={position} animation={false}>
      {children}
    </Tippy>
  );
};

export default Tooltip;
