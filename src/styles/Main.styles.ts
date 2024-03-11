import styled from "styled-components";
import { breakPoints } from "./breakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc((var(--vh, 1vh) * 100) - 90px);
`;

export const Banner = styled.div`
  width: 100%;
  height: 35%;
  border: 1px solid gray;

  @media screen and (max-width: ${breakPoints.medium}px) {
    height: 27%;
  }
`;

export const BottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;

  @media screen and (max-width: ${breakPoints.medium}px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 57%;
    gap: 20px;
  }
`;

export const HalfContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 48%;
  height: 100%;
  gap: 20px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 100%;
    gap: 10px;
  }
`;

export const Title = styled.div`
  font-size: var(--font-size-300);
  font-weight: 700;

  @media screen and (max-width: ${breakPoints.medium}px) {
    font-size: var(--font-size-400);
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-500);
  }
`;

export const ContentsContainer = styled.div`
  width: 100%;
  height: 80%;
  border: 1px solid gray;
`;
