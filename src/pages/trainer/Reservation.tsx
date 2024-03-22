import * as S from "../../styles/Schedule.styles";
import TabMenu from "../../components/TabMenu";
import Calendar from "../../components/schedule/Calendar";
import { useState } from "react";
import { TODAY } from "../../constants/Calendar.constants";
import { ITrainerReservationList } from "../../types/TrainerReservation.types";

export default function TrainerReservation() {
  const itemList: ITrainerReservationList[] = [
    {
      id: "1",
      name: "개인 레슨 3개월",
      time: "11:00",
      user: "홍길동",
    },
    {
      id: "2",
      name: "개인 레슨 3개월",
      time: "11:00",
      user: "홍길동",
    },
    {
      id: "3",
      name: "개인 레슨 3개월",
      time: "11:00",
      user: "홍길동",
    },
    {
      id: "4",
      name: "개인 레슨 3개월",
      time: "11:00",
      user: "홍길동",
    },
    {
      id: "5",
      name: "개인 레슨 3개월",
      time: "11:00",
      user: "홍길동",
    },
    {
      id: "6",
      name: "개인 레슨 3개월",
      time: "11:00",
      user: "홍길동",
    },
  ];
  const [selectedDay, setSelectedDay] = useState(TODAY);

  const handleClickDay = (day: Date) => {
    setSelectedDay(day);
  };

  return (
    <S.Container>
      <S.TopContainer className="trainer">
        <TabMenu />
      </S.TopContainer>
      <S.CalendarContainer>
        <Calendar selectedDay={selectedDay} handleClickDay={handleClickDay} />
      </S.CalendarContainer>
      <S.BottomContainer>
        <S.Title className="reservation">
          {selectedDay.getFullYear()}년 {selectedDay.getMonth() + 1}월{" "}
          {selectedDay.getDate()}일 스케줄
        </S.Title>
        <S.ReservationGridContainer>
          {itemList.map((item) => (
            <S.ReservationGrid key={item.id}>
              <S.ReservationTitle>{item.time}</S.ReservationTitle>
              <S.ReservationContents>{item.name}</S.ReservationContents>
              <S.ReservationContents>
                <span className="strong">{item.user}</span>
              </S.ReservationContents>
            </S.ReservationGrid>
          ))}
        </S.ReservationGridContainer>
      </S.BottomContainer>
    </S.Container>
  );
}
