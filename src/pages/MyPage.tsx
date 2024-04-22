import Infomation from "../components/myPage/Infomation";
import ModifyForm from "../components/myPage/ModifyForm";
import { useMyPageToggleStore } from "../stores/myPageStore";
import * as S from "../styles/myPage/myPage.styles";

export default function MyPage() {
  const { toggle } = useMyPageToggleStore();

  return (
    <S.Container>
      <S.Modal>
        <S.Title>내 정보</S.Title>
        {toggle ? <Infomation /> : <ModifyForm />}
        
      </S.Modal>
    </S.Container>
  );
}
