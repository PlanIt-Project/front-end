import * as S from "../../styles/admin/AdminModal.styles";
import { IModal } from "../../types/admin/Admin.types";
import { getAdminTrainerSchedule } from "../../hooks/queries/admin/getTrainerSchedule";
import {
  useAdminTrainerScheduleStore,
  useAdminTrainerSpecificScheduleStore,
  useAdminTrainerTriggerStore,
} from "../../stores/adminTrainerStore";
import { useEffect, useState } from "react";
import { weekToKor } from "../../utils/adminFilter";
import TrainerModify from "./TrainerModify";
import { IAdminTrainerScheduleData } from "../../types/admin/Admin.trainer.types";

export default function TrainerModal({ setOnModal, id }: IModal) {
  const [onModify, setOnModify] = useState<boolean>(false);

  const { setSpecificSchedule } = useAdminTrainerSpecificScheduleStore();
  const { trainerSchedule, setTrainerSchedule } =
    useAdminTrainerScheduleStore();
  const { trainerTrigger } = useAdminTrainerTriggerStore();

  const { data, refetch } = getAdminTrainerSchedule(Number(id));

  const onClickModify = (schedule: IAdminTrainerScheduleData) => {
    setOnModify(true);
    setSpecificSchedule(schedule);
  };

  const onClickClose = () => {
    setOnModal(false);
  };

  useEffect(() => {
    if (data) {
      setTrainerSchedule(data);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [trainerTrigger]);
  return (
    <>
      <S.Overlay>
        <S.ModalDiv>
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
              <S.ModalLittleButton
                onClick={() => {
                  onClickModify(schedule);
                }}
              >
                수정
              </S.ModalLittleButton>
            </S.ModalGrid>
          ))}
          <S.ButtonContainer>
            <S.CloseButton onClick={onClickClose}>취소</S.CloseButton>
          </S.ButtonContainer>
        </S.ModalDiv>
      </S.Overlay>
      {onModify && <TrainerModify setOnModal={setOnModify} />}
    </>
  );
}
