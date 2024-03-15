import React, { forwardRef, useEffect } from "react";
import { IconType } from "react-icons";

interface Props {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  Icon?: IconType;
  autoFocus?: boolean;
  classes?: string;
  type?: "submit" | "button";
  variant?: "primary" | "success" | "danger" | "indigo" | "default";
  onFocus?: () => void;
  outlined?: boolean;
  disabled?: boolean;
  isSubmitting?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      text,
      Icon,
      onClick,
      classes,
      type = "button",
      onFocus = () => {},
      variant = "default",
      autoFocus = false,
      disabled = false,
      isSubmitting = false,
      outlined = false,
    },
    ref
  ) => {
    
    useEffect(() => {
      autoFocus && onFocus();
    }, [autoFocus, onFocus]);

    return (
      <button
        autoFocus={autoFocus}
        ref={ref}
        disabled={disabled || isSubmitting}
        aria-disabled={disabled || isSubmitting}
        type={type}
        onClick={onClick}
        onFocus={onFocus}
        className={`btn noselect ${variant} ${
          outlined ? "outlined" : ""
        } ${classes}`}
      >
        {Icon && <Icon size={16} />}
        <span>{text}</span>
      </button>
    );
  }
);

export default Button;
