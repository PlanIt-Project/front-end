import styled from "styled-components";
import { CommonButton } from "./globalStyles";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 250px;
  background-color: var(--white-color-100);
  border-radius: 10px;
  gap: 50px;
`;

export const ModalContents = styled.div`
  font-size: var(--font-size-300);
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  gap: 30px;
`;

export const CancelButton = styled(CommonButton)`
  background-color: var(--white-color-100);
  border: 1px solid var(--main-color-400);
`;

export const ConfirmButton = styled(CommonButton)``;
