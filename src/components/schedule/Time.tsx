import dayjs from "dayjs";
import { OPEN_TIME } from "../../constants/OpenTime.constants";
import * as S from "../../styles/Schedule.styles";
import { ITimeProps } from "../../types/Time.types";

export default function Time({
  selectedDay,
  selectedTime,
  getTimeStatus,
  handleClickTime,
}: ITimeProps) {
  const { dawnTimes, morningTimes, afternoonTimes, nightTimes } = OPEN_TIME();

  return (
    <>
      <S.Title className="reservation">
        {dayjs(selectedDay).year()}년 {dayjs(selectedDay).month() + 1}월{" "}
        {dayjs(selectedDay).date()}일
      </S.Title>
      <S.TimeTitleContainer>
        <S.TimeTitle>새벽</S.TimeTitle>
        <S.TimeContainer>
          {dawnTimes.map((dawn, index) => (
            <S.Time
              key={index}
              $status={getTimeStatus(dawn)}
              $isSelected={selectedTime === dawn}
              onClick={() => {
                handleClickTime(dawn);
              }}
            >
              {dawn}
            </S.Time>
          ))}
        </S.TimeContainer>
      </S.TimeTitleContainer>
      <S.TimeTitleContainer>
        <S.TimeTitle>오전</S.TimeTitle>
        <S.TimeContainer>
          {morningTimes.map((morning, index) => (
            <S.Time
              key={index}
              $status={getTimeStatus(morning)}
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
              $status={getTimeStatus(afternoon)}
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
        <S.TimeTitle>밤</S.TimeTitle>
        <S.TimeContainer>
          {nightTimes.map((night, index) => (
            <S.Time
              key={index}
              $status={getTimeStatus(night)}
              $isSelected={selectedTime === night}
              onClick={() => {
                handleClickTime(night);
              }}
            >
              {night}
            </S.Time>
          ))}
        </S.TimeContainer>
      </S.TimeTitleContainer>
    </>
  );
}
