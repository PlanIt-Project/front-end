import { useState } from "react";
import * as S from "../../styles/admin/AdminModal.styles";
import { IModal } from "../../types/admin/Admin.types";
import { ProgramChangeStatus } from "../../hooks/queries/admin/changeProgramStatus";

export default function ProgramModal({ setOnModal, id, status }: IModal) {
  // program type 추가해 달라고 하기, Detail로 전송할 store 만들기
  const [isSuspended, setIsSuspended] = useState(false);

  const { mutate, data } = ProgramChangeStatus(Number(id), isSuspended);

  const onClickClose = () => {
    setOnModal(false);
  };
  const textAboutStatus = () => {
    if (status === "IN_PROGRESS") return "진행 중 => 일시 정지";
    else return "일시 정지 => 진행 중";
  };

  const onClickChange = () => {
    if (status === "IN_PROGRESS") setIsSuspended(false);
    else setIsSuspended(true);
    mutate();
    alert(data?.message);
  };

  return (
    <S.Overlay>
      <S.LittleModal>
        <S.LittleModalTitle>이용권 상태를 변경하시겠습니까?</S.LittleModalTitle>
        <S.LittleModalText>{textAboutStatus()}</S.LittleModalText>
        <S.ButtonContainer>
          <S.ModalButton onClick={onClickChange}>변경</S.ModalButton>
          <S.CloseButton onClick={onClickClose}>취소</S.CloseButton>
        </S.ButtonContainer>
      </S.LittleModal>
    </S.Overlay>
  );
}
