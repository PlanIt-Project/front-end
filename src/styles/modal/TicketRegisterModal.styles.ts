import styled from "styled-components";
import { breakPoints } from "../breakPoints";
import { CommonButton } from "../globalStyles";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 420px;
  background-color: var(--white-color-100);
  border-radius: 10px;
  padding: 10px 0;
  gap: 50px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 400px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 320px;
    height: 500px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 90%;
  margin-top: 5px;
  margin-bottom: -20px;
`;

export const CloseButton = styled.button`
  font-size: var(--font-size-300);
  font-weight: 700;
  cursor: pointer;
`;

export const LabelSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 90%;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Label = styled.label`
  font-size: var(--font-size-400);
  font-weight: 700;
  width: 100px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    font-size: var(--font-size-500);
  }
`;

export const RegisterButton = styled(CommonButton)`
  @media screen and (max-width: ${breakPoints.small}px) {
    width: 150px;
    height: 25px;
    font-size: var(--font-size-500);
  }
`;

export const DateInput = styled.input<{ $isDateFocus: boolean }>`
  width: 270px;
  height: 25px;
  padding: 10px;
  border: 1px solid var(--white-color-700);
  outline: ${(props) =>
    props.$isDateFocus ? "1px solid var(--main-color-500)" : "none"};
  border-radius: 10px;
  font-size: var(--font-size-600);

  &:focus {
    outline: 1px solid var(--main-color-500);
  }
`;
