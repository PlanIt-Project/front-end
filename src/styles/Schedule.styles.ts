import styled from "styled-components";
import { CommonButton } from "./globalStyles";
import { breakPoints } from "./breakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  overflow-x: hidden;

  @media screen and (max-width: ${breakPoints.small}px) {
    gap: 15px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  height: 50px;

  &.trainer {
    justify-content: flex-start;
  }
`;

export const ReservationButton = styled(CommonButton)`
  @media screen and (max-width: ${breakPoints.small}px) {
    width: 120px;
    height: 25px;
    font-size: var(--font-size-500);
  }
`;

export const CalendarContainer = styled.div`
  width: calc(100% - 2px);
  height: 600px;
  border: 1px solid var(--main-color-300);

  @media screen and (max-width: ${breakPoints.medium}px) {
    height: 500px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    height: 450px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 2px);
  gap: 15px;
  margin: 10px 0 20px 1px;
`;

export const Title = styled.div`
  font-size: var(--font-size-400);
  font-weight: 700;
  padding: 10px 0 0 10px;

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-500);
  }
`;

export const ReservationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 150px;
  padding: 10px;
  border: 1px solid var(--main-color-300);
  border-radius: 10px;

  @media screen and (max-width: ${breakPoints.small}px) {
    flex-direction: column;
    height: 180px;
  }
`;

export const NoContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  font-size: var(--font-size-500);

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-600);
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 50%;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  font-size: var(--font-size-500);

  @media screen and (max-width: ${breakPoints.medium}px) {
    font-size: var(--font-size-600);
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    height: 120px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 35%;
  gap: 15px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 45%;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const ChangeDeleteButton = styled(CommonButton)`
  background-color: var(--white-color-100);
  border: 1px solid var(--main-color-400);
  width: 150px;
  color: var(--main-color-500);

  &:hover {
    color: var(--white-color-800);
  }

  @media screen and (max-width: ${breakPoints.medium}px) {
    font-size: var(--font-size-500);
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    height: 30px;
    font-size: var(--font-size-500);
  }
`;
