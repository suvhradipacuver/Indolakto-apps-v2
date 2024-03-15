import { IconType } from "react-icons";
import { TooltipPosition } from "../../types";
import Tooltip from "../Tooltip/Tooltip";

interface Props {
  Icon: IconType;
  tooltipText?: string;
  tooltipPosition?: TooltipPosition;
  text?: string;
  onClick?: Function;

  classes?: string;
  iconSize?: number;
  iconColor?: string;
  iconFillColor?: string;
  iconClasses?: string;

  isSubmitting?: boolean;
  disabled?: boolean;
  color?: string;
}

const IconButton = ({
  Icon,
  text,
  tooltipText,
  classes,
  iconColor,
  color,
  disabled,
  iconFillColor,
  iconSize = 18,
  iconClasses,
  onClick,
  isSubmitting = false,
  tooltipPosition,
}: Props) => {
  return tooltipText ? (
    <Tooltip content={tooltipText} position={tooltipPosition}>
      <button
        type="button"
        onClick={(e) => onClick && onClick(e)}
        className={`
       flex items-center justify-center gap-x-1 disabled:opacity-30 noselect ${
         isSubmitting === false
           ? `hover:bg-${color}-50 hover:border-${color}-200 hover:text-${color}-600`
           : ``
       }   ${classes}`}
        disabled={isSubmitting || disabled ? true : false}
      >
        <Icon
          color={iconColor ? iconColor : "currentColor"}
          fill={iconFillColor ? iconFillColor : "none"}
          size={iconSize}
          className={`icon ${iconClasses}`}
        />
        {text && <span>{text}</span>}
      </button>
    </Tooltip>
  ) : (
    <button
      type="button"
      onClick={(e) => onClick && onClick(e)}
      className={`
     flex items-center justify-center gap-x-1 disabled:opacity-30 noselect ${
       isSubmitting === false
         ? `hover:bg-${color}-50 hover:border-${color}-200 hover:text-${color}-600`
         : ``
     }   ${classes}`}
      aria-disabled={disabled || isSubmitting}
      disabled={isSubmitting || disabled}
    >
      <Icon
        color={iconColor ? iconColor : "currentColor"}
        fill={iconFillColor ? iconFillColor : "none"}
        size={iconSize}
        className={`icon ${iconClasses}`}
      />
      {text && <span>{text}</span>}
    </button>
  );
};

export default IconButton;
