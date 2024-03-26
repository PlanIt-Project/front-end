import styled from "styled-components";
import { CommonInput, CommonButton } from "../styles/globalStyles";
import { useNavigate } from "react-router";
import { LoginSignUpContainer } from "../styles/LoginSignUp.style";
import { useState, ChangeEvent } from "react";
import { LoginService } from "../api/services/Login.services";
import googleicon from "../assets/GoogleIcon.svg";
import kakaoicon from "../assets/KakaoIcon.svg";
import navericon from "../assets/NaverIcon.svg";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("abcd");
  const [password, setPassword] = useState<string>("dddd");

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

  const handleLogin = () => {
    (async () => {
      try {
        const res = await LoginService({ email, password });
        const { accessToken, refreshToken } = res;
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);
        navigate("/main");
      } catch (error) {
        console.error("로그인 실패:", error);
      }
    })();
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
      <div>
        <img src={googleicon} />
        <img src={kakaoicon} />
        <img src={navericon} />
      </div>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled(LoginSignUpContainer)`
  p {
    font-size: 2rem;
  }
  div {
    display: flex;
    gap: 3rem;

    img {
      cursor: pointer;
    }
  }
`;

const LoginButton = styled(CommonButton)`
  background: white;
  color: black;
`;
