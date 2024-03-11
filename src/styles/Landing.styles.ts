import styled from "styled-components";
import { breakPoints } from "./breakPoints";
import { CommonButton } from "./globalStyles";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc((var(--vh, 1vh) * 100) - 90px);
  background: linear-gradient(
    to bottom,
    #f6ffff,
    #ecffff,
    var(--main-color-100),
    var(--main-color-200),
    var(--main-color-300),
    var(--main-color-400),
    var(--main-color-500)
  );
  overflow: hidden;
`;

export const TitleButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 50%;
  transform: translate(0, 20%);
  gap: 100px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  font-weight: 800;
  gap: 20px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    font-size: 4.5rem;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: 3.5rem;
  }
`;

export const StartButton = styled(CommonButton)`
  background-color: var(--main-color-500);
  color: var(--white-color-100);
  font-weight: 700;

  &:hover {
    background-color: var(--main-color-500);
  }
`;

export const KettlebellContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: -80px;
  width: 600px;
  height: 600px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 400px;
    height: 400px;
    left: -50px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 250px;
    height: 250px;
  }
`;

export const DumbellContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 500px;
  height: 500px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 250px;
    height: 250px;
    right: -30px;
  }
`;
