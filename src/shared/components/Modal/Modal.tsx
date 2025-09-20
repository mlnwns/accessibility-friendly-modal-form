import { useId } from "react";
import Button from "../Button/Button";
import * as S from "./Modal.styled";

interface ModalButton {
  label: string;
  onClick: () => void;
}

interface ModalProps {
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  buttons?: ModalButton[];
}

const Modal = ({ onClose, title, content, buttons = [] }: ModalProps) => {
  const buttonId = useId();

  return (
    <S.Overlay onClick={onClose}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <div>{content}</div>

        <div>
          {buttons.map((button) => {
            return (
              <Button
                key={buttonId}
                onClick={button.onClick}
                label={button.label}
              />
            );
          })}
        </div>
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;
