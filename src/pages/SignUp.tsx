import * as S from "../styles/SignUp.styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { registerSignUp } from "../hooks/queries/registerSignUp";
import ToastNotification from "../components/modal/ToastNotification";
import { formatTime } from "../utils/formatTime";
import { getEmailNumber } from "../hooks/queries/getEmailNumber";
import { getEmailConfirm } from "../hooks/queries/getEmailConfirm";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isEmailConfirm, setIsEmailConfirm] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [emailConfirmNumber, setEmailConfirmNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isErrorToastOpen, setIsErrorToastOpen] = useState(false);
  const [errorContents, setErrorContents] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastContents, setToastContents] = useState("");

  const navigate = useNavigate();

  const { mutate: signUpMutate, isSuccess: isSignUpSuccess } = registerSignUp(
    email,
    password,
    name,
    birth,
    gender,
    number,
    address,
    setIsToastOpen,
    setToastContents,
  );
  const { mutate: getEmailNumberMutate } = getEmailNumber(
    email,
    setIsToastOpen,
    setToastContents,
  );
  const { mutate: getEmailConfirmMutate, isSuccess: isEmailCheckSuccess } =
    getEmailConfirm(
      email,
      emailConfirmNumber,
      setIsToastOpen,
      setToastContents,
    );

  useEffect(() => {
    if (!isToastOpen && isSignUpSuccess) {
      navigate("/login");
    }
  });

  useEffect(() => {
    if (isEmailCheckSuccess) {
      setTimeLeft(0);
      return;
    }

    if (isEmailConfirm) {
      const interval = setInterval(() => {
        setTimeLeft((timeLeft) => {
          if (timeLeft === 0) {
            clearInterval(interval);
            return 0;
          } else {
            return timeLeft - 1;
          }
        });
      }, 1000);

      if (timeLeft === 0) {
        clearInterval(interval);
        if (!isEmailCheckSuccess) {
          setIsEmailConfirm(false);
        }
      }

      return () => {
        clearInterval(interval);
      };
    }
  }, [isEmailConfirm, timeLeft, isEmailCheckSuccess]);

  const handleGetEmailNumber = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setIsErrorToastOpen(true);
      setErrorContents("유효한 이메일 주소를 입력해 주세요.");
      return;
    }

    if (!isEmailCheckSuccess) {
      setIsEmailConfirm(true);
      getEmailNumberMutate();
    }
  };

  const handleEmailConfirm = () => {
    if (!isEmailCheckSuccess) getEmailConfirmMutate();
  };

  const handleSignUp = () => {
    if (!email || !password || !name || !birth || !gender || !number) {
      setIsErrorToastOpen(true);
      setErrorContents("모든 항목을 입력해 주세요.");
      return;
    } else if (password !== passwordConfirm) {
      setIsErrorToastOpen(true);
      setErrorContents("비밀번호가 일치하지 않습니다.");
      return;
    } else if (password.length < 8) {
      setIsErrorToastOpen(true);
      setErrorContents("비밀번호를 8자리 이상으로 설정해 주세요.");
      return;
    } else if (!isEmailCheckSuccess) {
      setIsErrorToastOpen(true);
      setErrorContents("이메일 인증이 필요합니다.");
      return;
    }

    signUpMutate();
  };

  return (
    <S.Container>
      <S.SignUpContainer>
        <h1>SIGN UP</h1>
        <S.SignUpColumn>
          <p>이메일</p>
          <S.SignUpInput
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          ></S.SignUpInput>
        </S.SignUpColumn>
        <S.CheckEmailContainer>
          <S.CheckEmail
            onClick={handleGetEmailNumber}
            $disabled={isEmailCheckSuccess}
          >
            이메일 인증
          </S.CheckEmail>
          {isEmailConfirm && (
            <S.Timer $disabled={isEmailCheckSuccess}>
              {formatTime(timeLeft)}
            </S.Timer>
          )}
        </S.CheckEmailContainer>
        {isEmailConfirm && (
          <S.CheckEmailContainer>
            <S.EmailNumberInput
              placeholder="인증번호"
              onChange={(e) => {
                if (!isEmailCheckSuccess) setEmailConfirmNumber(e.target.value);
              }}
              $disabled={isEmailCheckSuccess}
            />
            <S.CheckEmail
              onClick={handleEmailConfirm}
              $disabled={isEmailCheckSuccess}
            >
              인증하기
            </S.CheckEmail>
          </S.CheckEmailContainer>
        )}
        <S.SignUpColumn>
          <p>비밀번호</p>
          <S.SignUpInput
            type="password"
            placeholder="영문,숫자 포함 8자리 이상"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></S.SignUpInput>
        </S.SignUpColumn>
        <S.SignUpColumn>
          <p>비밀번호 확인</p>
          <S.SignUpInput
            type="password"
            placeholder="영문,숫자 포함 8자리 이상"
            required
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          ></S.SignUpInput>
        </S.SignUpColumn>
        <S.SignUpColumn>
          <p>이름</p>
          <S.SignUpInput
            type="text"
            placeholder="이름"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></S.SignUpInput>
        </S.SignUpColumn>
        <S.SignUpColumn>
          <p>출생년도</p>
          <S.SignUpInput
            type="text"
            maxLength={8}
            placeholder="숫자만 8자리 입력 (19000101)"
            required
            value={birth}
            onChange={(e) => {
              setBirth(e.target.value);
            }}
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
          ></S.SignUpInput>
        </S.SignUpColumn>
        <S.SignUpColumn>
          <p>성별</p>
          <S.GenderInput
            type="radio"
            name="gender"
            onChange={() => {
              setGender("MALE");
            }}
            required
          />
          <p>남자</p>
          <S.GenderInput
            type="radio"
            name="gender"
            onChange={() => {
              setGender("FEMALE");
            }}
            required
          />
          <p>여자</p>
        </S.SignUpColumn>
        <S.SignUpColumn>
          <p>휴대폰번호</p>
          <S.SignUpInput
            type="text"
            maxLength={11}
            placeholder="-없이 숫자만"
            required
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
          ></S.SignUpInput>
        </S.SignUpColumn>
        <S.SignUpColumn>
          <p>주소</p>
          <S.SignUpInput
            type="text"
            placeholder="주소를 입력해 주세요"
            required
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></S.SignUpInput>
        </S.SignUpColumn>
        <S.SignUpButton onClick={handleSignUp}>회원가입</S.SignUpButton>
      </S.SignUpContainer>
      {isErrorToastOpen && (
        <ToastNotification
          contents={errorContents}
          isToastOpen={isErrorToastOpen}
          setIsToastOpen={setIsErrorToastOpen}
        />
      )}
      {isToastOpen && (
        <ToastNotification
          contents={toastContents}
          isToastOpen={isToastOpen}
          setIsToastOpen={setIsToastOpen}
        />
      )}
    </S.Container>
  );
}
