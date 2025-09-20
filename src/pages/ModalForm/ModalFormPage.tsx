import Button from "../../shared/components/Button/Button";
import Select from "../../shared/components/Select/Select";
import Modal from "../../shared/components/Modal/Modal";
import Input from "../../shared/components/Input/Input";
import { useState } from "react";

const ModalFormPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [github, setGithub] = useState("");

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
          content={
            <div>
              <p>
                하단에는 이메일과 FE 경력 연차 등 간단한 정보를 입력해주세요.
              </p>

              <Input
                label="이름 / 닉네임"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                label="이메일"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Select
                label="FE 경력 연차"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                options={[
                  { value: "", label: "선택해주세요" },
                  { value: "0-3", label: "0-3년" },
                  { value: "4-7", label: "4-7년" },
                  { value: "8+", label: "8년 이상" },
                ]}
              />

              <Input
                label="GitHub 링크 (선택)"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
          }
          buttons={[
            { label: "취소", onClick: () => setIsOpenModal(false) },
            {
              label: "제출하기",
              onClick: () => {
                setIsOpenModal(false);
              },
            },
          ]}
        />
      )}
    </>
  );
};

export default ModalFormPage;
