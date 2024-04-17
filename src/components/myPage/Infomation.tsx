import { useMyPageToggleStore } from "../../stores/myPageStore";
import * as S from "../../styles/myPage/myPage.styles";

export default function Infomation() {
  const { setToggle } = useMyPageToggleStore();
  
  const onClickButton = () => {
    setToggle(false);
  };
  return (
    <S.InfomationContainer>
      <S.Content>
        <S.Name>이름:</S.Name>
        <S.Text>홍길동</S.Text>
      </S.Content>
      <S.Content>
        <S.Name>이메일:</S.Name>
        <S.Text>asdsgccxdsd@naver.com</S.Text>
      </S.Content>
      <S.Content>
        <S.Name>생년월일:</S.Name>
        <S.Text>2003-03-27</S.Text>
      </S.Content>
      <S.Content>
        <S.Name>주소:</S.Name>
        <S.Text>서울특별시 남천구</S.Text>
      </S.Content>
      <S.Content>
        <S.Name>핸드폰 번호:</S.Name>
        <S.Text>010-1234-1234</S.Text>
      </S.Content>
      <S.Content>
        <S.Name>성별:</S.Name>
        <S.Text>남성</S.Text>
      </S.Content>
      <S.Content>
        <S.Name>권한:</S.Name>
        <S.Text>회원</S.Text>
      </S.Content>
      <S.ButtonContainer>
        <S.Button onClick={onClickButton}>수정하기</S.Button>
      </S.ButtonContainer>
    </S.InfomationContainer>
  );
}
