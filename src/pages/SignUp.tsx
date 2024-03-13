import styled from "styled-components";
import { CommonInput, CommonButton } from "../styles/globalStyles";
import { LoginSignUpContainer } from "../styles/LoginSignUp.style";

export default function Login() {
  return (
    <SignUpContainer>
      <h1>SIGN UP</h1>
      <SignUpColumn>
        <p>Email</p>
        <SignUpInput type="email" placeholder="Email" required></SignUpInput>
      </SignUpColumn>
      <CheckEmail>Email 인증</CheckEmail>
      <SignUpColumn>
        <p>PW</p>
        <SignUpInput
          type="password"
          placeholder="영문,숫자 포함 8자리 이상"
          required
        ></SignUpInput>
      </SignUpColumn>
      <SignUpColumn>
        <p>PW 확인</p>
        <SignUpInput
          type="password"
          placeholder="영문,숫자 포함 8자리 이상"
          required
        ></SignUpInput>
      </SignUpColumn>
      <SignUpColumn>
        <p>이름</p>
        <SignUpInput type="text" placeholder="이름" required></SignUpInput>
      </SignUpColumn>
      <SignUpColumn>
        <p>출생년도</p>
        <SignUpInput
          type="text"
          placeholder="8자리 입력"
          required
        ></SignUpInput>
      </SignUpColumn>
      <SignUpColumn>
        <p>성별</p>
        <SignUpInput
          type="checkbox"
          placeholder="8자리 입력"
          className="genderInput"
          required
        />
        <p>남자</p>
        <SignUpInput
          type="checkbox"
          placeholder="8자리 입력"
          className="genderInput"
          required
        />
        <p>여자</p>
      </SignUpColumn>
      <SignUpColumn>
        <p>휴대폰번호</p>
        <SignUpInput
          type="text"
          placeholder="-없이 숫자만"
          required
        ></SignUpInput>
      </SignUpColumn>
      <SignUpButton>회원가입</SignUpButton>
    </SignUpContainer>
  );
}

const SignUpContainer = styled(LoginSignUpContainer)`
  h1 {
    margin: 10px 0px;
  }
`;

const SignUpButton = styled(CommonButton)`
  background: white;
  color: black;
  margin: 20px 0px;
  height: 20px;
  width: 250px;
`;

const SignUpInput = styled(CommonInput)`
  width: 300px;
`;

const SignUpColumn = styled.div`
  display: flex;
  align-items: center;

  p {
    width: 130px;
  }

  .genderInput {
    width: 20px;
    border-radius: 50px;
    font-size: var(--font-size-200);
    margin-right: 10px;
  }
`;

const CheckEmail = styled(CommonButton)`
  height: 10px;
  width: 120px;
  margin-right: 50px;
  margin-top: -10px;
  font-size: var(--font-size-700);
`;
