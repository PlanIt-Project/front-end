import { useEffect } from "react";
import { getMyPageInformation } from "../../hooks/queries/myPage/getMypageInformation";
import {
  useMyPageInfomationStore,
  useMyPageToggleStore,
  useMyPageTriggerStore,
} from "../../stores/myPageStore";
import * as S from "../../styles/myPage/myPage.styles";
import { genderToKor, roleToKor } from "../../utils/adminFilter";

export default function Infomation() {
  const { setToggle } = useMyPageToggleStore();
  const { infomation, setInfomation } = useMyPageInfomationStore();
  const { myPageTrigger } = useMyPageTriggerStore();

  const { data, refetch } = getMyPageInformation();

  const onClickButton = () => {
    setToggle(false);
  };

  useEffect(() => {
    if (data) {
      setInfomation(data);
    }
    console.log(data);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [myPageTrigger]);

  return (
    <S.InfomationContainer>
      <S.Content>
        <S.Name>이름:</S.Name>
        <S.Text>{infomation.name}</S.Text>
      </S.Content>
      <S.Content>
        <S.Name>이메일:</S.Name>
        <S.Text>{infomation.email}</S.Text>
      </S.Content>
      <S.Content>
        <S.Name>생년월일:</S.Name>
        <S.Text>{infomation.birth}</S.Text>
      </S.Content>
      <S.Content>
        <S.Name>주소:</S.Name>
        <S.Text>{infomation.address}</S.Text>
      </S.Content>
      <S.Content>
        <S.Name>핸드폰 번호:</S.Name>
        <S.Text>{infomation.phone_number}</S.Text>
      </S.Content>
      <S.Content>
        <S.Name>성별:</S.Name>
        <S.Text>{genderToKor(infomation.gender)}</S.Text>
      </S.Content>
      <S.Content>
        <S.Name>권한:</S.Name>
        <S.Text>{roleToKor(infomation.role)}</S.Text>
      </S.Content>
      <S.ButtonContainer>
        <S.Button onClick={onClickButton}>수정하기</S.Button>
      </S.ButtonContainer>
    </S.InfomationContainer>
  );
}
