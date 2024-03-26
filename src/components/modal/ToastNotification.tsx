import { Dispatch, SetStateAction, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface IToastNotificationProps {
  contents: string;
  isToastOpen: boolean;
  setIsToastOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ToastNotification({
  contents,
  isToastOpen,
  setIsToastOpen,
}: IToastNotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsToastOpen(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <Container $isToastOpen={isToastOpen}>{contents}</Container>;
}

const slideIn = keyframes`
    from {
      transform: translate(-50%,-100%);
    }
    to {
      transform: translate(-50%,0%);
    }
`;

const slideOut = keyframes`
    from {
      transform: translate(-50%,0%);
    }
    to {
      transform: translate(-50%,-100%);
    }
`;

const Container = styled.div<{ $isToastOpen: boolean }>`
  position: fixed;
  top: 100px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color-200);
  border-radius: 10px;
  width: 500px;
  height: 25px;
  padding: 10px;
  font-size: var(--font-size-400);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${(props) => (props.$isToastOpen ? slideIn : slideOut)} 0.5s
    ease-in-out forwards;
  z-index: 2;
`;
