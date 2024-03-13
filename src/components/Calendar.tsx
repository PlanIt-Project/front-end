import * as S from "../styles/Calendar.styles";
import LeftArrow from "../assets/icon_left-arrow.png";
import RightArrow from "../assets/icon_right-arrow.png";
import { useState } from "react";

export default function Calendar() {
  const TODAY = new Date();
  TODAY.setHours(0, 0, 0, 0);
  const DAYS_OF_WEEK = ["일", "월", "화", "수", "목", "금", "토"];

  const [currentMonth, setCurrentMonth] = useState(TODAY);
  const [selectedDay, setSelectedDay] = useState(TODAY);

  const isSameDay = (toDay: Date, compareDay?: Date | null) => {
    if (
      toDay.getFullYear() === compareDay?.getFullYear() &&
      toDay.getMonth() === compareDay?.getMonth() &&
      toDay.getDate() === compareDay?.getDate()
    ) {
      return true;
    }
    return false;
  };

  // NOTE 날짜 선택
  const handleClickDay = (day: Date) => {
    setSelectedDay(day);
  };

  // NOTE 전 달로 이동
  const handleMoveToPrevCalendar = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        currentMonth.getDate(),
      ),
    );
  };

  // NOTE 다음 달로 이동
  const handleMoveToNextCalendar = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        currentMonth.getDate(),
      ),
    );
  };

  // NOTE 캘린더 날짜 세팅
  const buildCalendarDays = () => {
    // 현재 월의 시작 요일
    const currentMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1,
    ).getDay();

    // 현재 월의 마지막 날짜
    const currentMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0,
    );

    // 이전 월의 마지막 날짜
    const prevMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      0,
    );

    // 다음 월의 첫 번째 날짜
    const nextMonthStartDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1,
    );

    // 이전 월의 마지막 날부터 현재 월의 첫 번째 요일까지의 날짜들을 담음
    const days = Array.from({ length: currentMonthStartDate }, (_, i) => {
      return new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        prevMonthEndDate.getDate() - i,
      );
    }).reverse();

    // 현재 월의 첫 번째 날부터 마지막 날까지의 날짜들을 추가
    days.push(
      ...Array.from(
        { length: currentMonthEndDate.getDate() },
        (_, i) =>
          new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1),
      ),
    );

    // 남은 일수 계산
    const remainingDays = 7 - (days.length % 7);
    // 남은 일수가 7보다 작으면 다음 달의 시작 날짜부터 remainingDays개수 만큼 날짜 추가
    if (remainingDays < 7) {
      days.push(
        ...Array.from(
          { length: remainingDays },
          (_, i) =>
            new Date(
              nextMonthStartDate.getFullYear(),
              nextMonthStartDate.getMonth(),
              i + 1,
            ),
        ),
      );
    }

    return days;
  };

  // NOTE 날짜를 통해 el 생성
  const buildCalendarTag = (calendarDays: Date[]) => {
    return calendarDays.map((day: Date, index: number) => {
      const isCurrentMonth = day.getMonth() === currentMonth.getMonth();

      const dayClass = !isCurrentMonth
        ? "otherMonth"
        : day < TODAY
          ? "prevDay"
          : "futureDay";

      const selectedDayClass = isSameDay(day, selectedDay) ? "choiceDay" : "";

      return (
        <S.CalendarDay key={index}>
          <S.Day
            className={`${dayClass} ${selectedDayClass}`}
            onClick={() => {
              if (isCurrentMonth) {
                handleClickDay(day);
              }
            }}
          >
            {day.getDate()}
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
          {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
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
