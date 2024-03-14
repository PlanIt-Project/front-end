import styled from "styled-components";
import { CommonInput, CommonButton } from "../styles/globalStyles";
import { useNavigate } from "react-router";
import { LoginSignUpContainer } from "../styles/LoginSignUp.style";

export default function Login() {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signUp");
  };

  return (
    <LoginPageContainer>
      <h1>LOGIN</h1>
      <CommonInput type="email" placeholder="Email" required></CommonInput>
      <CommonInput
        type="password"
        placeholder="Password"
        required
      ></CommonInput>
      <LoginButton>로그인</LoginButton>
      <p onClick={goToSignUp}>회원가입</p>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled(LoginSignUpContainer)``;

const LoginButton = styled(CommonButton)`
  background: white;
  color: black;
`;
