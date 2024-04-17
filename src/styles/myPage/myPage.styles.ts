import styled from "styled-components";
import { CommonButton } from "../globalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Modal = styled.div`
  width: 550px;
  height: fit-content;
  background: var(--background-color-100);
  border-radius: 20px;
  padding: 40px 0 50px 0;
  margin: 40px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Title = styled.div`
  font-size: var(--font-size-300);
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 100px;
`;

export const Button = styled(CommonButton)`
  color: white;
  width: 100px;
  font-size: var(--font-size-500);
  background-color: var(--main-color-400);
  &:hover {
    background-color: var(--main-color-300);
  }
`;

export const InfomationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 50px;
  width: 100%;
  margin-left: 50px;
`;

export const Name = styled.span`
  width: 130px;
  text-align: center;
  font-size: var(--font-size-400);
  font-weight: 600;
`;

export const Text = styled.span`
  font-size: var(--font-size-400);
  width: 230px;
  text-align: center;
`;

export const ModifyFormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
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

export const Input = styled.input<{
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
  margin-left: -20px;
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

export const InputText = styled.span`
  font-size: var(--font-size-500);
  margin-right: 20px;
`;

export const InputContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Select = styled.select<{ $width?: number }>`
  height: 40px;
  width: ${(props) => (props.$width ? `${props.$width}px` : "290px")};
  border-radius: 30px;
  border: 1px solid var(--main-color-400);
  font-size: var(--font-size-600);
  text-align: center;
  background: none;
  margin-left: -10px;
  &:focus {
    outline: none;
    outline: 1px solid var(--main-color-500);
  }
`;

export const Option = styled.option`
  text-align: center;
  font-weight: 600;
  color: #595959;
  height: 50px;
`;

export const ErrorMsg = styled.span`
  margin-top: -25px;
  margin-bottom: -25px;
  margin-left: 20px;
  font-size: 15px;
  color: var(--main-color-500);
`;
