import styled from "styled-components";
import { breakPoints } from "./breakPoints";
import { CommonButton } from "./globalStyles";

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
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  height: 50px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    padding: 10px 20px;
  }
`;

export const RegisterButton = styled(CommonButton)`
  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 120px;
    height: 25px;
    font-size: var(--font-size-500);
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 100px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 85%;
  height: 250px;
  border-radius: 15px;
  background-color: var(--main-color-200);

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 90%;
    height: 230px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 88%;
    height: 200px;
  }
`;

export const ProductName = styled.p`
  font-size: var(--font-size-400);
  font-weight: 700;
`;

export const Date = styled.p`
  font-size: var(--font-size-500);
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 80%;
  gap: 5px;

  > .strong {
    font-weight: 700;
  }

  @media screen and (max-width: ${breakPoints.medium}px) {
    font-size: var(--font-size-600);
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-700);
  }
`;
