import Button from "../Button/Button";
import * as S from "./Modal.styled";

interface ModalButton {
  label: string;
  onClick: () => void;
}

interface ModalProps {
  onClose: () => void;
  title: string;
  content: string;
  buttons?: ModalButton[];
}

const Modal = ({ onClose, title, content, buttons = [] }: ModalProps) => {
  return (
    <S.Overlay onClick={onClose}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{content}</p>

        <div>
          {buttons.map((button, index) => (
            <Button key={index} onClick={button.onClick} label={button.label} />
          ))}
        </div>
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;
