import styled from "styled-components";
import { CommonButton } from "../globalStyles";

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 550px;
  height: 500px;
  background: var(--background-color-100);
  border-radius: 20px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 50px;
  width: 100%;
  margin-left: 80px;
`;

export const ContentName = styled.span`
  font-size: var(--font-size-400);
`;

export const ContentInput = styled.input<{
  $width?: number;
}>`
  background: none;
  border: 1px solid var(--main-color-400);
  border-radius: 30px;
  height: 20px;
  width: ${(props) => (props.$width ? `${props.$width}px` : "200px")};
  height: 15px;
  padding: 10px;
  font-size: var(--font-size-600);
  text-align: center;
  ::placeholder {
    color: var(--white-color-700);
    font-size: var(--font-size-600);
    font-weight: 600;
  }
  &:focus {
    outline: none;
    outline: 1px solid var(--main-color-500);
  }
`;

export const InputText = styled.span`
  font-size: var(--font-size-500);
`;

export const InputContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 100px;
`;

export const ModalButton = styled(CommonButton)`
  color: white;
  width: 100px;
  font-size: var(--font-size-500);
  background-color: var(--main-color-400);
  &:hover {
    background-color: var(--main-color-300);
  }
`;
