import * as S from "../../styles/admin/AdminModal.styles";
import { IModal } from "../../types/admin/Admin.types";

export default function AccountModal({ setOnModal, id }: IModal) {

  const onClickClose = () => {
    setOnModal(false);
    console.log(id)
  }
  return (
    <S.Overlay>
      <S.Modal>
        <S.ContentName>계정 권한 설정</S.ContentName>
        <S.ButtonContainer>
          <S.ModalButton>등록</S.ModalButton>
          <S.CloseButton
            onClick={() => {
              onClickClose();
            }}
          >
            취소
          </S.CloseButton>
        </S.ButtonContainer>
      </S.Modal>
    </S.Overlay>
  );
}
