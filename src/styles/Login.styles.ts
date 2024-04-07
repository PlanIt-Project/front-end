import styled from "styled-components";
import { CommonButton } from "./globalStyles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc((var(--vh, 1vh) * 100) - 100px);
`;

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 450px;
  background-color: var(--main-color-300);
  color: white;
  border-radius: 10px;
  gap: 25px;
  padding: 20px 40px;

  h1 {
    font-size: 4rem;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    gap: 3rem;

    img {
      cursor: pointer;
    }
  }
`;

export const SignUpButton = styled.button`
  font-size: var(--font-size-500);
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 40px;
`;

export const LoginButton = styled(CommonButton)`
  background: white;
  color: black;
  font-size: var(--font-size-500);
  margin-top: 30px;
`;
