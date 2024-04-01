import { useEffect, useState } from "react";
import Calendar from "../../components/schedule/Calendar";
import * as S from "../../styles/Schedule.styles";
import { TODAY } from "../../constants/Calendar.constants";
import { useNavigate } from "react-router";
import ModalPortal from "../../components/modal/ModalPortal";
import ConfirmModal from "../../components/modal/ConfirmModal";
import { getUserSchedule } from "../../hooks/queries/reservation/getUserSchedule";
import dayjs from "dayjs";
import { IUserScheduleData } from "../../types/reservation/UserReservation.types";

export default function UserSchedule() {
  const [selectedDay, setSelectedDay] = useState(TODAY);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [userSchedule, setUserSchedule] = useState<IUserScheduleData[]>();

  const { data } = getUserSchedule(selectedDay);

  useEffect(() => {
    if (data) setUserSchedule(data[selectedDay]);
  }, [data]);

  const navigate = useNavigate();

  const handleMoveToReservation = () => {
    navigate("/user/reservation");
  };

  // NOTE 날짜 선택
  const handleClickDay = (day: string) => {
    setSelectedDay(day);
  };

  const handleMoveToEdit = (
    reservationId: number,
    programId: number,
    reservationTime: string,
  ) => {
    navigate(
      `/user/reservation/${reservationId}/${programId}/${reservationTime}`,
    );
  };

  const handleCancel = () => {
    setIsConfirmModalOpen(true);
  };

  return (
    <>
      <S.Container>
        <S.TopContainer>
          <S.ReservationButton onClick={handleMoveToReservation}>
            예약하기
          </S.ReservationButton>
        </S.TopContainer>
        <S.CalendarContainer>
          <Calendar selectedDay={selectedDay} handleClickDay={handleClickDay} />
        </S.CalendarContainer>
        <S.BottomContainer>
          <S.Title>
            {dayjs(selectedDay).year()}년 {dayjs(selectedDay).month() + 1}월{" "}
            {dayjs(selectedDay).date()}일 예약 내역
          </S.Title>
          {userSchedule ? (
            userSchedule.map((schedule) => (
              <S.ReservationContainer key={schedule.id}>
                <S.LeftContainer>
                  <S.InfoContainer>
                    <p>{schedule.employee.name}</p>
                    <p>{schedule.reservationTime}</p>
                    <p>이용권 : {schedule.programName}</p>
                  </S.InfoContainer>
                </S.LeftContainer>
                <S.RightContainer>
                  <S.ChangeDeleteButton
                    onClick={() => {
                      handleMoveToEdit(
                        schedule.id,
                        schedule.programId,
                        schedule.reservationTime,
                      );
                    }}
                  >
                    변경하기
                  </S.ChangeDeleteButton>
                  <S.ChangeDeleteButton onClick={handleCancel}>
                    취소하기
                  </S.ChangeDeleteButton>
                </S.RightContainer>
              </S.ReservationContainer>
            ))
          ) : (
            <S.NoContents>예약 내역이 없습니다.</S.NoContents>
          )}
        </S.BottomContainer>
      </S.Container>

      {isConfirmModalOpen && (
        <ModalPortal>
          <ConfirmModal
            contents="취소하시겠습니까?"
            setIsModalOpen={setIsConfirmModalOpen}
          />
        </ModalPortal>
      )}
    </>
  );
}
