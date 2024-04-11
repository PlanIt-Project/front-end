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

export const Modal = styled.form<{ $width?: number }>`
  width: ${(props) => (props.$width ? `${props.$width}px` : "550px")};
  height: fit-content;
  background: var(--background-color-100);
  border-radius: 20px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const ModalDiv = styled.div<{ $width?: number }>`
  width: ${(props) => (props.$width ? `${props.$width}px` : "550px")};
  height: fit-content;
  background: var(--background-color-100);
  border-radius: 20px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const ModalTitle = styled.div`
  font-size: var(--font-size-300);
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 20px;
  width: 100%;
  margin-left: 30px;
`;

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 80px 140px 140px 140px;
  justify-items: center;
  align-items: center;
  margin-top: -8px;
  margin-bottom: -8px;
`;

export const ContentName = styled.span`
  width: 150px;
  text-align: center;
  font-size: var(--font-size-400);
  font-weight: 600;
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
    font-weight: 700;
  }
  &:focus {
    outline: none;
    outline: 1px solid var(--main-color-500);
  }
`;

export const ContentImageInput = styled.input`
  display: none;
`;

export const ContentLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  border-radius: 10px;
  background-color: var(--white-color-400);
  cursor: pointer;
`;
export const NoImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
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

export const ContentSelect = styled.select`
  height: 40px;
  width: 290px;
  padding-left: 20px;
  border-radius: 30px;
  border: 1px solid var(--main-color-400);
  font-size: var(--font-size-600);
  text-align: center;
  background: none;
  &:focus {
    outline: none;
    outline: 1px solid var(--main-color-500);
  }
`;

export const ContentOption = styled.option`
  font-weight: 600;
  color: #595959;
  height: 50px;
`;

export const ContentTextArea = styled.textarea`
  background: none;
  border: 1px solid var(--main-color-400);
  border-radius: 10px;
  height: 20px;
  width: 250px;
  height: 70px;
  padding: 10px;
  font-size: 1.4rem;
  ::placeholder {
    color: var(--white-color-700);
    font-size: var(--font-size-600);
    font-weight: 700;
  }
  &:focus {
    outline: none;
    outline: 1px solid var(--main-color-500);
  }
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

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100px;
  padding: 10px;
  border-radius: 10px;
  font-size: var(--font-size-500);
  background-color: var(--main-color-400);
  &:hover {
    background-color: var(--main-color-300);
  }
`;

export const ModalLittleButton = styled(CommonButton)`
  color: white;
  width: 70px;
  height: 30px;
  font-size: var(--font-size-500);
  background-color: var(--main-color-400);
  &:hover {
    background-color: var(--main-color-300);
  }
`;

export const LittleModal = styled.div`
  width: 400px;
  height: fit-content;
  background: var(--background-color-100);
  border-radius: 20px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const LittleModalTitle = styled.div`
  font-weight: 600;
  font-size: var(--font-size-400);
`;

export const LittleModalText = styled.div`
  font-size: var(--font-size-400);
`;

export const ErrorMsg = styled.span`
  margin-top: -25px;
  margin-bottom: -25px;
  margin-left: 20px;
  font-size: 15px;
  color: var(--main-color-500);
`;
