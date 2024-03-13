import * as S from "../../styles/ConfirmModal.styles";
import { IConfirmModalProps } from "../../types/ConfirmModal.types";

export default function ConfirmModal({
  contents,
  setIsModalOpen,
}: IConfirmModalProps) {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Background>
      <S.ModalContainer>
        <S.ModalContents>{contents}</S.ModalContents>
        <S.ButtonContainer>
          <S.CancelButton onClick={handleCloseModal}>닫기</S.CancelButton>
          <S.ConfirmButton>취소</S.ConfirmButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.Background>
  );
}
