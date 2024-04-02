import { useState } from "react";
import TabMenu from "../../components/TabMenu";
import Calendar from "../../components/schedule/Calendar";
import * as S from "../../styles/Schedule.styles";
import { TODAY } from "../../constants/Calendar.constants";
import Time from "../../components/schedule/Time";
import { registerTrainerSchedule } from "../../hooks/queries/reservation/registerTrainerSchedule";
import ToastNotification from "../../components/modal/ToastNotification";

export default function TrainerSchedule() {
  // const unavailableTimes = ["6:00", "14:00", "18:00"];

  const [selectedDay, setSelectedDay] = useState(TODAY);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [availableTimes] = useState<any[]>([]);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const { mutate: registerScheduleMutate } = registerTrainerSchedule(
    selectedDay,
    selectedTimes,
    setIsToastOpen,
  );

  const handleClickDay = (day: string) => {
    setSelectedDay(day);
  };

  const getTimeStatus = (time: string) => {
    const isTimeAvailable = availableTimes.some(
      (t) => t.reservationTime === time,
    );
    return isTimeAvailable ? "available" : "unavailable";
  };

  const handleClickTime = (time: string) => {
    setSelectedTimes((prevSelectedTimes) => {
      if (prevSelectedTimes.includes(time)) {
        return prevSelectedTimes.filter((t) => t !== time);
      } else {
        return [...prevSelectedTimes, time];
      }
    });
  };

  const handleRegister = () => {
    registerScheduleMutate();
  };

  return (
    <>
      <S.Container>
        <S.TopContainer className="trainer">
          <TabMenu />
        </S.TopContainer>
        <S.CalendarContainer>
          <Calendar selectedDay={selectedDay} handleClickDay={handleClickDay} />
        </S.CalendarContainer>
        <S.BottomContainer className="reservation">
          <Time
            selectedDay={selectedDay}
            selectedTime={selectedTimes}
            getTimeStatus={getTimeStatus}
            handleClickTime={handleClickTime}
          />
          <S.ReservationButton onClick={handleRegister}>
            설정하기
          </S.ReservationButton>
        </S.BottomContainer>
      </S.Container>
      {isToastOpen && (
        <ToastNotification
          contents="스케줄 설정이 완료되었습니다."
          isToastOpen={isToastOpen}
          setIsToastOpen={setIsToastOpen}
        />
      )}
    </>
  );
}
