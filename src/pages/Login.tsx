import styled from "styled-components";
import { CommonInput, CommonButton } from "../styles/globalStyles";
import { useNavigate } from "react-router";
import { LoginSignUpContainer } from "../styles/LoginSignUp.style";
import { useState, ChangeEvent } from "react";
import { LoginService } from "../api/services/Main.services";

export default function Login() {
  const [email, setEmail] = useState<string>("abcd");
  const [password, setPassword] = useState<string>("dddd");

  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signUp");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleLogin = async () => {
    const res = await LoginService({ email, password });
  };

  return (
    <LoginPageContainer>
      <h1>LOGIN</h1>
      <CommonInput
        id="eamil"
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleChange}
        value={email}
      ></CommonInput>
      <CommonInput
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={handleChange}
        value={password}
      ></CommonInput>
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
      <p onClick={goToSignUp}>회원가입</p>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled(LoginSignUpContainer)``;

const LoginButton = styled(CommonButton)`
  background: white;
  color: black;
`;
