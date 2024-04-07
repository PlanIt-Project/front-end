import * as S from "../styles/SignUp.styles";
import { useState } from "react";
import { useNavigate } from "react-router";
import { SignUpService } from "../api/services/SignUp.services";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleSignUp = () => {
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다");
    }
    if (!email || !password || !name || !birth || !number) {
      alert("모든 항목을 입력해주세요");
    }
    // TO DO signup api 추가
    (async () => {
      await SignUpService({ email, password, name, birth, number, address });
    })();
    navigate("/login");
  };

  return (
    <S.Container>
      ₩
      <S.SignUpContainer>
        <h1>SIGN UP</h1>
        <S.SignUpColumn>
          <p>Email</p>
          <S.SignUpInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          ></S.SignUpInput>
        </S.SignUpColumn>
        <S.CheckEmailContainer>
          <S.CheckEmail>Email 인증</S.CheckEmail>
        </S.CheckEmailContainer>
        <S.SignUpColumn>
          <p>PW</p>
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
          <p>PW 확인</p>
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
            placeholder="8자리 입력"
            required
            value={birth}
            onChange={(e) => {
              setBirth(e.target.value);
            }}
          ></S.SignUpInput>
        </S.SignUpColumn>
        <S.SignUpColumn>
          <p>성별</p>
          <S.GenderInput type="radio" name="gender" required />
          <p>남자</p>
          <S.GenderInput type="radio" name="gender" required />
          <p>여자</p>
        </S.SignUpColumn>
        <S.SignUpColumn>
          <p>휴대폰번호</p>
          <S.SignUpInput
            type="text"
            placeholder="-없이 숫자만"
            required
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
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
    </S.Container>
  );
}
