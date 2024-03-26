import * as S from "../../styles/admin/AdminModal.styles";
import { IModal } from "../../types/admin/Admin.types";

export default function ProductModal({ setOnModal }: IModal) {
  const onClickClose = () => {
    setOnModal(false);
  };
  return (
    <S.Overlay>
      <S.LittleModal>
        <S.LittleModalTitle>판매 상태를 변경하시겠습니까?</S.LittleModalTitle>
        <S.LittleModalText>{"판매중 => 판매 중지"}</S.LittleModalText>
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
