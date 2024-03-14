import { useState } from "react";
import Calendar from "../../components/schedule/Calendar";
import * as S from "../../styles/Schedule.styles";
import { TODAY } from "../../constants/Calendar.constants";
import { useNavigate } from "react-router";
import ModalPortal from "../../components/modal/ModalPortal";
import ConfirmModal from "../../components/modal/ConfirmModal";

export default function UserSchedule() {
  const scheduleList = [
    {
      id: "1",
      trainer: "홍길동",
      time: "오전 11:00 ~ 11:50",
      item: "개인 레슨 3개월",
    },
    {
      id: "2",
      trainer: "홍길동",
      time: "오전 11:00 ~ 11:50",
      item: "개인 레슨 3개월",
    },
    {
      id: "3",
      trainer: "홍길동",
      time: "오전 11:00 ~ 11:50",
      item: "개인 레슨 3개월",
    },
  ];

  const [selectedDay, setSelectedDay] = useState(TODAY);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleMoveToReservation = () => {
    navigate("/user/reservation");
  };

  // NOTE 날짜 선택
  const handleClickDay = (day: Date) => {
    setSelectedDay(day);
  };

  const handleMoveToEdit = (id: string) => {
    navigate(`/user/reservation/${id}`);
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
            {selectedDay.getFullYear()}년 {selectedDay.getMonth() + 1}월{" "}
            {selectedDay.getDate()}일 예약 내역
          </S.Title>
          {scheduleList ? (
            scheduleList.map((schedule) => (
              <S.ReservationContainer key={schedule.id}>
                <S.LeftContainer>
                  <S.InfoContainer>
                    <p>{schedule.trainer}</p>
                    <p>{schedule.time}</p>
                    <p>이용권 : {schedule.item}</p>
                  </S.InfoContainer>
                </S.LeftContainer>
                <S.RightContainer>
                  <S.ChangeDeleteButton
                    onClick={() => {
                      handleMoveToEdit(schedule.id);
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
