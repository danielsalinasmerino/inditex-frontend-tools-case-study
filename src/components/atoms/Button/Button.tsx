import { FC } from "react";
import "./Button.css";

export type ButtonProps = {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  style,
  disabled,
}) => {
  return (
    <button
      type="button"
      onMouseDown={onClick}
      className="button"
      style={style}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
