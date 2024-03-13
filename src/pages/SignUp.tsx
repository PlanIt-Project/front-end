import styled from "styled-components";
import { CommonInput, CommonButton } from "../styles/globalStyles";
import LoginPageContainer from "./Login";

export default function SignUp() {
  return (
    <SignUpContainer>
      <h1>SIGN UP</h1>
      <CommonInput type="email" placeholder="Email" required></CommonInput>
      <CommonInput
        type="password"
        placeholder="Password"
        required
      ></CommonInput>
      <LoginButton>회원가입</LoginButton>
    </SignUpContainer>
  );
}

const SignUpContainer = styled(LoginPageContainer)``;

const LoginButton = styled(CommonButton)`
  background: white;
  color: black;
`;
