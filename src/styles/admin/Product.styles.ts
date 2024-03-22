import styled from "styled-components";
import { CommonButton } from "../globalStyles";

export const AdminContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AdminContent = styled.div`
  width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: var(--background-color-100);
`;

export const Title = styled.h1`
  margin-top: 50px;
  font-size: var(--font-size-100);
  font-weight: 600;
`;

export const MakeButton = styled(CommonButton)`
  align-self: flex-end;
  margin-right: 100px;
  color: white;
  width: 100px;
  font-size: var(--font-size-500);
  background-color: var(--main-color-400);
  &:hover {
    background-color: var(--main-color-300);
  }
`;

export const ManageBox = styled.div`
  width: 85%;
  min-height: 500px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

export const NameBar = styled.div`
  background-color: var(--main-color-300);
  color: white;
  border-radius: 20px 20px 0 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  margin-top: 30px;
  padding: 30px 0;
`;

export const Name = styled.span`
  font-size: var(--font-size-500);
`;

export const ContentContainer = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentBar = styled.li`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  width: 1020px;
  padding: 15px 0;
`;

export const Content = styled.span`
  font-size: var(--font-size-600);
`;

export const ModifyButton = styled(CommonButton)`
  width: 80px;
  height: 20px;
  font-size: var(--font-size-500);
  color: white;
  background-color: var(--main-color-400);
  &:hover {
    background-color: var(--main-color-300);
  }
`;

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
