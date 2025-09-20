import { useId } from "react";
import * as S from "./Select.styled";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  value: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ label, value, options, onChange }: SelectProps) => {
  const selectId = useId();

  return (
    <S.Wrapper>
      <S.Label htmlFor={selectId}>{label}</S.Label>
      <S.SelectField id={selectId} value={value} onChange={onChange}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </S.SelectField>
    </S.Wrapper>
  );
};

export default Select;
