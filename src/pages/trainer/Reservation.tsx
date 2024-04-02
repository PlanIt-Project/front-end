import * as S from "../../styles/Schedule.styles";
import TabMenu from "../../components/TabMenu";
import Calendar from "../../components/schedule/Calendar";
import { useEffect, useState } from "react";
import { TODAY } from "../../constants/Calendar.constants";
import dayjs from "dayjs";
import { getUserSchedule } from "../../hooks/queries/reservation/getUserSchedule";
import { IUserScheduleData } from "../../types/reservation/UserReservation.types";
import { getTimeWithLabel } from "../../utils/getTimeWithLabel";

export default function TrainerReservation() {
  const [selectedDay, setSelectedDay] = useState(TODAY);
  const [reservationList, setReservationList] = useState<IUserScheduleData[]>(
    [],
  );

  const { data } = getUserSchedule(selectedDay, "RESERVED");

  useEffect(() => {
    if (data) setReservationList(data[selectedDay]);
  }, [data]);

  const handleClickDay = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <S.Container>
      <S.TopContainer className="trainer">
        <TabMenu />
      </S.TopContainer>
      <S.CalendarContainer>
        <Calendar
          selectedDay={selectedDay}
          handleClickDay={handleClickDay}
          isAllowClick={true}
        />
      </S.CalendarContainer>
      <S.BottomContainer>
        <S.Title className="reservation">
          {dayjs(selectedDay).year()}년 {dayjs(selectedDay).month() + 1}월{" "}
          {dayjs(selectedDay).date()}일 스케줄
        </S.Title>
        {reservationList ? (
          <S.ReservationGridContainer>
            {reservationList.map((reservation) => (
              <S.ReservationGrid key={reservation.id}>
                <S.ReservationTitle>
                  {getTimeWithLabel(reservation.reservationTime)}
                </S.ReservationTitle>
                <S.ReservationContents>
                  <span className="strong">{reservation.member.name}</span>
                </S.ReservationContents>
                <S.ReservationContents>
                  {reservation.programName}
                </S.ReservationContents>
              </S.ReservationGrid>
            ))}
          </S.ReservationGridContainer>
        ) : (
          <S.NoContents>예약 내역이 없습니다.</S.NoContents>
        )}
      </S.BottomContainer>
    </S.Container>
  );
}
