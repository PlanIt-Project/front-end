import { deleteProduct } from "../../hooks/queries/admin/deleteProduct";
import * as S from "../../styles/admin/AdminModal.styles";
import { IModal } from "../../types/admin/Admin.types";

export default function ProductModal({ setOnModal, id }: IModal) {
  const { mutate } = deleteProduct(Number(id), setOnModal);
  const onClickClose = () => {
    setOnModal(false);
  };
  const onClickDelete = () => {
    mutate();
  };
  return (
    <S.Overlay>
      <S.LittleModal>
        <S.LittleModalTitle>상품을 삭제하시겠습니까?</S.LittleModalTitle>
        <S.ButtonContainer>
          <S.ModalButton onClick={onClickDelete}>삭제</S.ModalButton>
          <S.CloseButton onClick={onClickClose}>취소</S.CloseButton>
        </S.ButtonContainer>
      </S.LittleModal>
    </S.Overlay>
  );
}
