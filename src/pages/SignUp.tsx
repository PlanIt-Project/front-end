import styled from "styled-components";
import { CommonInput, CommonButton } from "../styles/globalStyles";
import { LoginSignUpContainer } from "../styles/LoginSignUp.style";

export default function Login() {
  return (
    <SignUpContainer>
      <h1>SIGN UP</h1>
      <CommonInput type="email" placeholder="Email" required></CommonInput>
      <CommonInput
        type="password"
        placeholder="Password"
        required
      ></CommonInput>
      <SignUpButton>회원가입</SignUpButton>
    </SignUpContainer>
  );
}

const SignUpContainer = styled(LoginSignUpContainer)``;

const SignUpButton = styled(CommonButton)`
  background: white;
  color: black;
`;
