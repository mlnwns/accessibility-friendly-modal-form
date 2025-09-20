interface RegisterButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ onClick, label }: RegisterButtonProps) => {
  return (
    <button onClick={onClick} type="button">
      {label}
    </button>
  );
};

export default Button;
