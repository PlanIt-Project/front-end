import * as S from "../../styles/Calendar.styles";
import LeftArrow from "../../assets/icon_left-arrow.png";
import RightArrow from "../../assets/icon_right-arrow.png";
import { DAYS_OF_WEEK, TODAY } from "../../constants/Calendar.constants";
import { ICalendarProps } from "../../types/Calendar.types";
import { useState } from "react";
import dayjs from "dayjs";

export default function Calendar({
  selectedDay,
  handleClickDay,
  isAllowClick = false,
}: ICalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(TODAY);

  const isSameDay = (today: string, compareDay?: string | null) => {
    return today === compareDay;
  };

  // NOTE 전 달로 이동
  const handleMoveToPrevCalendar = () => {
    setCurrentMonth(
      dayjs(currentMonth).subtract(1, "month").format("YYYY-MM-DD"),
    );
  };

  // NOTE 다음 달로 이동
  const handleMoveToNextCalendar = () => {
    setCurrentMonth(dayjs(currentMonth).add(1, "month").format("YYYY-MM-DD"));
  };

  // NOTE 캘린더 날짜 세팅
  const buildCalendarDays = () => {
    const days = [];
    const startOfCurrentMonth = dayjs(currentMonth).startOf("month");
    const endOfCurrentMonth = dayjs(currentMonth).endOf("month");
    const startDayOfWeek = startOfCurrentMonth.day();

    // 이전 달의 마지막 일부터 현재 월의 시작 요일까지
    for (let i = startDayOfWeek; i > 0; i--) {
      days.push(startOfCurrentMonth.subtract(i, "day").format("YYYY-MM-DD"));
    }

    // 현재 월
    for (let i = 0; i < endOfCurrentMonth.date(); i++) {
      days.push(startOfCurrentMonth.add(i, "days").format("YYYY-MM-DD"));
    }

    // 다음 달 (42개 총 칸 - 생성된 일수)
    const totalDays = 42 - days.length;
    for (let i = 0; i < totalDays; i++) {
      days.push(endOfCurrentMonth.add(i + 1, "day").format("YYYY-MM-DD"));
    }

    return days;
  };

  // NOTE 날짜를 통해 el 생성
  const buildCalendarTag = (calendarDays: string[]) => {
    return calendarDays.map((day: string, index: number) => {
      const dayObject = dayjs(day);
      const isCurrentMonth = dayObject.month() === dayjs(currentMonth).month();
      const isBeforeToday = dayObject.isBefore(TODAY, "day");

      let dayClass = "";

      // 현재 월의 과거 날짜 처리
      if (isCurrentMonth && isBeforeToday) {
        dayClass = isAllowClick ? "pastDayClickable" : "pastDay";
      }

      // 다른 달의 과거 날짜 처리
      if (!isCurrentMonth && isBeforeToday) {
        dayClass = "pastDay";
      }

      // 현재 월이 아닌 날짜 처리
      if (!isCurrentMonth) {
        dayClass = "otherMonth";
      }

      // 사용자가 선택한 날짜 처리
      if (isSameDay(day, selectedDay)) {
        dayClass = "choiceDay";
      }

      return (
        <S.CalendarDay key={index}>
          <S.Day
            className={`${dayClass}`}
            onClick={() => {
              if (isCurrentMonth && (!isBeforeToday || isAllowClick)) {
                handleClickDay(dayObject.format("YYYY-MM-DD"));
              }
            }}
          >
            {dayObject.date()}
          </S.Day>
        </S.CalendarDay>
      );
    });
  };

  // NOTE 각 줄에 7일씩 나눠서 뿌리기
  const divideWeek = (calendarTags: JSX.Element[]) => {
    return calendarTags.reduce(
      (acc: JSX.Element[][], day: JSX.Element, i: number) => {
        if (i % 7 === 0) acc.push([day]);
        else acc[acc.length - 1].push(day);
        return acc;
      },
      [],
    );
  };

  const calendarDays = buildCalendarDays();
  const calendarTags = buildCalendarTag(calendarDays);
  const calendarRows = divideWeek(calendarTags);

  return (
    <S.Container>
      <S.TopContainer>
        <S.ArrowIcon onClick={handleMoveToPrevCalendar}>
          <img src={LeftArrow} alt="왼쪽 화살표" />
        </S.ArrowIcon>
        <p>
          {dayjs(currentMonth).year()}년 {dayjs(currentMonth).month() + 1}월
        </p>
        <S.ArrowIcon onClick={handleMoveToNextCalendar}>
          <img src={RightArrow} alt="오른쪽 화살표" />
        </S.ArrowIcon>
      </S.TopContainer>

      <S.WeekContainer>
        {DAYS_OF_WEEK.map((week, index) => (
          <S.Week key={index}>{week}</S.Week>
        ))}
      </S.WeekContainer>

      <S.CalendarContainer>
        {calendarRows.map((day, index) => (
          <S.CalendarRows key={index}>{day}</S.CalendarRows>
        ))}
      </S.CalendarContainer>
    </S.Container>
  );
}
