import * as S from "../styles/Login.styles";
import { CommonInput } from "../styles/globalStyles";
import { useNavigate } from "react-router";
import { useState, ChangeEvent } from "react";
import { getLogin } from "../hooks/queries/login/getLogin";
import googleicon from "../assets/GoogleIcon.svg";
import navericon from "../assets/NaverIcon.svg";
import ToastNotification from "../components/modal/ToastNotification";
import { getSocialLoginForm } from "../hooks/queries/login/getSocialLoginForm";

export default function Login() {
  const [email, setEmail] = useState<string>("abcd");
  const [password, setPassword] = useState<string>("dddd");
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [socialProvider, setSocialProvider] = useState("");

  const { mutate: loginMutate } = getLogin(
    email,
    password,
    setIsToastOpen,
    setLoginError,
  );

  const { mutate: socialLoginMutate } = getSocialLoginForm(socialProvider);

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

  const handleLogin = () => {
    loginMutate();
  };

  const handleSocialLogin = async (registrationId: string) => {
    setSocialProvider(registrationId);

    try {
      const { data: redirectUrl } = await socialLoginMutate(registrationId);
      navigate(redirectUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Container>
      <S.LoginPageContainer>
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
        <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
        <S.SignUpButton onClick={goToSignUp}>회원가입</S.SignUpButton>
        <S.SocialLoginContainer>
          <img
            src={googleicon}
            onClick={() => {
              handleSocialLogin("google");
            }}
          />
          <img
            src={navericon}
            onClick={() => {
              handleSocialLogin("naver");
            }}
          />
        </S.SocialLoginContainer>
      </S.LoginPageContainer>

      {isToastOpen && (
        <ToastNotification
          contents={loginError}
          isToastOpen={isToastOpen}
          setIsToastOpen={setIsToastOpen}
        />
      )}
    </S.Container>
  );
}
