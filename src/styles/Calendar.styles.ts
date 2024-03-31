import styled from "styled-components";
import { breakPoints } from "./breakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  font-size: var(--font-size-400);
  font-weight: 700;
`;

export const ArrowIcon = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const WeekContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    padding: 0 7px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    padding: 0 5px;
  }
`;

export const Week = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--main-color-500);
  font-size: var(--font-size-400);
  font-weight: 700;

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-500);
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 10px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    padding: 0 7px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    padding: 0 5px;
  }
`;

export const CalendarRows = styled.div`
  display: flex;
  align-items: center;
`;

export const CalendarDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;

  @media screen and (max-width: ${breakPoints.medium}px) {
    padding: 3px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    padding: 0px;
  }
`;

export const Day = styled.div`
  padding: 12px 15px;
  font-size: var(--font-size-400);
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-500);
  }

  &.choiceDay {
    background-color: var(--white-color-500);
    font-weight: 700;
  }

  &.otherMonth {
    color: var(--white-color-700);
    cursor: default;
  }

  &.pastDay {
    color: var(--white-color-400);
    cursor: not-allowed;
  }

  &.otherMonthBeforeToday {
    color: var(--white-color-400);
    cursor: not-allowed;
  }
`;
