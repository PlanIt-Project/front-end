import { styled } from "styled-components";
import { CommonButton, CommonInput } from "./globalStyles";
import { breakPoints } from "./breakPoints";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc((var(--vh, 1vh) * 100) - 100px);
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color-300);
  margin: auto;
  color: white;
  border-radius: 10px;
  gap: 15px;
  padding: 20px 40px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 400px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 330px;
    padding: 20px;
  }

  h1 {
    font-size: var(--font-size-100);
    margin: 20px 0px;
  }

  p {
    font-size: var(--font-size-500);
    cursor: pointer;
  }
`;

export const SignUpButton = styled(CommonButton)`
  background: white;
  color: black;
  margin: 20px 0px;
  height: 30px;
  width: 230px;

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 200px;
    height: 27px;
    font-size: var(--font-size-500);
  }
`;

export const SignUpInput = styled(CommonInput)`
  width: 300px;
  color: black;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 250px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 220px;
    font-size: var(--font-size-700);
  }
`;

export const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 320px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 270px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 250px;
  }
`;

export const GenderInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: var(--font-size-200);
  margin-right: 10px;
  border-radius: 50%;
  vertical-align: middle;
  border: 2px solid var(--white-color-100);
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: var(--main-color-400);
    border: 2px solid var(--main-color-200);
  }
`;

export const SignUpColumn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    width: 120px;
    cursor: default;

    @media screen and (max-width: ${breakPoints.small}px) {
      font-size: var(--font-size-700);
    }
  }

  span {
    font-size: var(--font-size-600);
    margin-right: 20px;
  }
`;

export const CheckEmailContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  margin-left: 110px;
  gap: 10px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    margin-left: 160px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 250px;
    margin-left: 140px;
  }
`;

export const CheckEmail = styled.button<{ $disabled: boolean }>`
  font-size: var(--font-size-700);
  padding: 10px;
  background-color: ${(props) =>
    props.$disabled ? "var(--white-color-500)" : "var(--main-color-400)"};
  border-radius: 10px;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

export const EmailNumberInput = styled(CommonInput)<{ $disabled: boolean }>`
  width: 130px;
  height: 20px;
  background-color: ${(props) => props.$disabled && "var(--white-color-400)"};
  cursor: ${(props) => props.$disabled && "not-allowed"};

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 100px;
    height: 18px;
  }
`;

export const Timer = styled.div<{ $disabled: boolean }>`
  font-size: var(--font-size-500);
  color: ${(props) => props.$disabled && "var(--white-color-500)"};
`;
