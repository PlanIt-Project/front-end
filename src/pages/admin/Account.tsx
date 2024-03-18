import AccountBox from "../../components/admin/AccountBox";
import * as S from "../../styles/admin/AdminCommon.styles";

export default function Account() {
  return <>
  <S.AdminContainer>
    <S.AdminContent>
      <S.Title>계정 관리</S.Title>
      <AccountBox />
    </S.AdminContent>
  </S.AdminContainer>
</>;
}
