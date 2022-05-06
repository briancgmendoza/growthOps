import * as React from "react";

type Props = {
  type: "button" | "submit" | "reset";
  className: string;
  name?: string;
  onClick?: (e: React.SyntheticEvent) => void;
  children?: JSX.Element | string | React.ReactNode;
};

const Button = ({ onClick, type, className, children }: Props) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
