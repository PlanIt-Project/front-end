import * as S from "../../styles/admin/AdminModal.styles";
import { IModal } from "../../types/admin/Admin.types";

export default function BannerModal({ setOnModal }: IModal) {
  const onClickClose = () => {
    setOnModal(false);
  };
  return (
    <S.Overlay>
      <S.LittleModal>
        <S.LittleModalTitle>노출 여부를 변경하시겠습니까?</S.LittleModalTitle>
        <S.LittleModalText>{"Y => N"}</S.LittleModalText>
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
