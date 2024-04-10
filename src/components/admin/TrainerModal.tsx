import * as S from "../../styles/admin/AdminModal.styles";
import { IModal } from "../../types/admin/Admin.types";
import { getAdminTrainerSchedule } from "../../hooks/queries/admin/getTrainerSchedule";
import { useAdminTrainerScheduleStore } from "../../stores/adminTrainerStore";
import { useEffect } from "react";
import { weekToKor } from "../../utils/adminFilter";

export default function TrainerModal({ setOnModal, id }: IModal) {
  const { trainerSchedule, setTrainerSchedule } =
    useAdminTrainerScheduleStore();
  const { data } = getAdminTrainerSchedule(Number(id));

  const onClickClose = () => {
    setOnModal(false);
  };

  useEffect(() => {
    if (data) {
      setTrainerSchedule(data);
    }
  }, [data]);
  console.log(trainerSchedule);
  return (
    <S.Overlay>
      <S.Modal>
        <S.ModalTitle>출퇴근시간 설정</S.ModalTitle>
        <S.ModalGrid>
          <S.ContentName>요일</S.ContentName>
          <S.ContentName>시작시간</S.ContentName>
          <S.ContentName>퇴근시간</S.ContentName>
          <S.ContentName>수정</S.ContentName>
        </S.ModalGrid>
        {trainerSchedule.map((schedule) => (
          <S.ModalGrid key={schedule.schedule_id}>
            <S.ContentName>{weekToKor(schedule.week)}</S.ContentName>
            <S.ContentName>{schedule.startAt.slice(0, 5)}</S.ContentName>
            <S.ContentName>{schedule.endAt.slice(0, 5)}</S.ContentName>
            <S.ModalLittleButton>수정</S.ModalLittleButton>
          </S.ModalGrid>
        ))}
        <S.ButtonContainer>
          <S.ModalButton>설정</S.ModalButton>
          <S.CloseButton onClick={onClickClose}>취소</S.CloseButton>
        </S.ButtonContainer>
      </S.Modal>
    </S.Overlay>
  );
}
