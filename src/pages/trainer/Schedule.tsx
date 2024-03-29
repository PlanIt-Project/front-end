import { useState } from "react";
import TabMenu from "../../components/TabMenu";
import Calendar from "../../components/schedule/Calendar";
import * as S from "../../styles/Schedule.styles";
import { TODAY } from "../../constants/Calendar.constants";
import Time from "../../components/schedule/Time";

export default function TrainerSchedule() {
  const unavailableTimes = ["6:00", "14:00", "18:00"];

  const [selectedDay, setSelectedDay] = useState(TODAY);
  const [selectedTime, setSelectedTime] = useState("");

  const handleClickDay = (day: string) => {
    setSelectedDay(day);
  };

  const isTimeAvailable = (time: string) => {
    return !unavailableTimes.includes(time);
  };

  const handleClickTime = (time: string) => {
    setSelectedTime(time);
  };

  return (
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
          selectedTime={selectedTime}
          isTimeAvailable={isTimeAvailable}
          handleClickTime={handleClickTime}
        />
        <S.ReservationButton>설정하기</S.ReservationButton>
      </S.BottomContainer>
    </S.Container>
  );
}
