import { forwardRef } from "react";

interface RegisterButtonProps {
  label: string;
  onClick: () => void;
}

const Button = forwardRef<HTMLButtonElement, RegisterButtonProps>(
  ({ onClick, label }, ref) => {
    return (
      <button ref={ref} onClick={onClick} type="button">
        {label}
      </button>
    );
  }
);

export default Button;
