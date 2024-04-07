import * as S from "../../styles/modal/ConfirmModal.styles";
import { IConfirmModalProps } from "../../types/ConfirmModal.types";

export default function ConfirmModal({
  contents,
  setIsModalOpen,
  cancelFn,
}: IConfirmModalProps) {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    cancelFn();
  };

  return (
    <S.Background>
      <S.ModalContainer>
        <S.ModalContents>{contents}</S.ModalContents>
        <S.ButtonContainer>
          <S.CancelButton onClick={handleCloseModal}>닫기</S.CancelButton>
          <S.ConfirmButton onClick={handleCancel}>취소</S.ConfirmButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.Background>
  );
}
