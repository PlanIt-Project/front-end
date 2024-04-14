import { deleteBanner } from "../../hooks/queries/admin/deleteBanner";
import * as S from "../../styles/admin/AdminModal.styles";
import { IModal } from "../../types/admin/Admin.types";

export default function BannerDeleteModal({ setOnModal, id }: IModal) {
  const { mutate } = deleteBanner(Number(id), setOnModal);
  const onClickClose = () => {
    setOnModal(false);
  };

  const onClickDelete = () => {
    mutate();
  };
  
  return (
    <S.Overlay>
      <S.LittleModal>
        <S.LittleModalTitle>배너를 삭제하시겠습니까?</S.LittleModalTitle>
        <S.ButtonContainer>
          <S.ModalButton onClick={onClickDelete}>삭제</S.ModalButton>
          <S.CloseButton onClick={onClickClose}>취소</S.CloseButton>
        </S.ButtonContainer>
      </S.LittleModal>
    </S.Overlay>
  );
}
