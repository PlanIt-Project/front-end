import styled from "styled-components";
import { CommonInput, CommonButton } from "../styles/globalStyles";
import { useNavigate } from "react-router";

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

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color-400);
  margin: auto;
  color: white;
  border-radius: 10px;
  gap: 20px;
  padding: 20px 40px;

  h1 {
    font-size: var(--font-size-100);
  }

  p {
    font-size: var(--font-size-500);
    cursor: pointer;
  }
`;

const LoginButton = styled(CommonButton)`
  background: white;
  color: black;
`;
