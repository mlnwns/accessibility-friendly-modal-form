import { useEffect, useRef, useId, type RefObject } from "react";
import Button from "../Button/Button";
import * as S from "./Modal.styled";
import { useFocusTrap } from "../../hooks/useFocusTrap";

interface ModalButton {
  label: string;
  onClick: () => void;
}

interface ModalProps {
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  buttons?: ModalButton[];
  returnFocusRef?: RefObject<HTMLElement | null>;
}

const Modal = ({
  onClose,
  title,
  content,
  buttons = [],
  returnFocusRef,
}: ModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonId = useId();
  const titleId = `${buttonId}-title`;
  const contentId = `${buttonId}-desc`;

  useFocusTrap(true, containerRef, titleRef, returnFocusRef);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <S.Overlay onClick={onClose}>
      <S.Container
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={contentId}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id={titleId} ref={titleRef} tabIndex={-1}>
          {title}
        </h2>
        <S.Content id={contentId}>{content}</S.Content>

        <div>
          {buttons.map((button) => (
            <Button
              key={button.label}
              onClick={button.onClick}
              label={button.label}
            />
          ))}
        </div>
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;
