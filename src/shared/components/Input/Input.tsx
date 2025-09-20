import { useId } from "react";
import * as S from "./Input.styled";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, type = "text", value, onChange }: InputProps) => {
  const inputId = useId();

  return (
    <S.Wrapper>
      <S.Label htmlFor={inputId}>{label}</S.Label>
      <S.InputField
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
      />
    </S.Wrapper>
  );
};

export default Input;
