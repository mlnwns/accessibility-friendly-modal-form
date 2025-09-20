import { useState } from "react";
import Button from "../../shared/components/Button/Button";
import Modal from "../../shared/components/Modal/Modal";

const ModalFormPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpenModal(true)}
        label="🚀 신청 폼 작성하기"
      />

      {isOpenModal && (
        <Modal
          onClose={() => setIsOpenModal(false)}
          title="신청 확인"
          content="신청 내용"
          buttons={[
            { label: "취소", onClick: () => setIsOpenModal(false) },
            { label: "제출하기", onClick: () => console.log("신청 완료!") },
          ]}
        />
      )}
    </>
  );
};

export default ModalFormPage;
