import * as S from "../../styles/admin/AdminModal.styles";
import { IModal } from "../../types/admin/Admin.types";

export default function ProgramModal({ setOnModal,id }: IModal) {
  const onClickClose = () => {
    setOnModal(false);
  };
  return (
    <S.Overlay>
      <S.LittleModal>
        <S.LittleModalTitle>{id}이용권 상태를 변경하시겠습니까?</S.LittleModalTitle>
        <S.LittleModalText>{"일시정지 => 진행 중"}</S.LittleModalText>
        <S.ButtonContainer>
          <S.ModalButton>변경</S.ModalButton>
          <S.CloseButton
            onClick={onClickClose}
          >
            취소
          </S.CloseButton>
        </S.ButtonContainer>
      </S.LittleModal>
    </S.Overlay>
  );
}
