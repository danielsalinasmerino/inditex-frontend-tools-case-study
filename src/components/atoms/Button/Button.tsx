import { FC } from "react";
import "./Button.css";

export type ButtonProps = {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
};

export const Button: FC<ButtonProps> = ({ label, onClick, style }) => {
  return (
    <button
      type="button"
      onMouseDown={onClick}
      className="button"
      style={style}
    >
      {label}
    </button>
  );
};
