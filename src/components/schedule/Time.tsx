import dayjs from "dayjs";
import { OPEN_TIME } from "../../constants/OpenTime.constants";
import * as S from "../../styles/Schedule.styles";
import { ITimeProps } from "../../types/Time.types";

export default function Time({
  selectedDay,
  selectedTime,
  isTimeAvailable,
  handleClickTime,
}: ITimeProps) {
  const { morningTimes, afternoonTimes, eveningTimes } = OPEN_TIME();

  return (
    <>
      <S.Title className="reservation">
        {dayjs(selectedDay).year()}년 {dayjs(selectedDay).month() + 1}월{" "}
        {dayjs(selectedDay).date()}일
      </S.Title>
      <S.TimeTitleContainer>
        <S.TimeTitle>오전</S.TimeTitle>
        <S.TimeContainer>
          {morningTimes.map((morning, index) => (
            <S.Time
              key={index}
              $disabled={!isTimeAvailable(morning)}
              $isSelected={selectedTime === morning}
              onClick={() => {
                handleClickTime(morning);
              }}
            >
              {morning}
            </S.Time>
          ))}
        </S.TimeContainer>
      </S.TimeTitleContainer>
      <S.TimeTitleContainer>
        <S.TimeTitle>오후</S.TimeTitle>
        <S.TimeContainer>
          {afternoonTimes.map((afternoon, index) => (
            <S.Time
              key={index}
              $disabled={!isTimeAvailable(afternoon)}
              $isSelected={selectedTime === afternoon}
              onClick={() => {
                handleClickTime(afternoon);
              }}
            >
              {afternoon}
            </S.Time>
          ))}
        </S.TimeContainer>
      </S.TimeTitleContainer>
      <S.TimeTitleContainer>
        <S.TimeTitle>저녁</S.TimeTitle>
        <S.TimeContainer>
          {eveningTimes.map((evening, index) => (
            <S.Time
              key={index}
              $disabled={!isTimeAvailable(evening)}
              $isSelected={selectedTime === evening}
              onClick={() => {
                handleClickTime(evening);
              }}
            >
              {evening}
            </S.Time>
          ))}
        </S.TimeContainer>
      </S.TimeTitleContainer>
    </>
  );
}
