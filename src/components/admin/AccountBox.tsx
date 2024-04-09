import { useState } from "react";
import {
  ACCOUNT_CONTENTS,
  ACCOUNT_NAMES,
} from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import AccountModal from "./AccountModal";

export default function AccountBox() {
  const [onModal, setOnModal] = useState(false);

  const onClickModifyButton = () => {
    setOnModal(!onModal);
  };
  return (
    <>
      <S.ManageBox>
        <S.NameBar $nameNumber={8}>
          {ACCOUNT_NAMES.map((name) => (
            <S.Name key={name.id}>{name.value}</S.Name>
          ))}
        </S.NameBar>
        <S.ContentContainer>
          {ACCOUNT_CONTENTS.map((content) => (
            <S.ContentBar key={content.id} $nameNumber={7}>
              <S.ContentHover $nameNumber={7}>
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"name"}>{content.name}</S.Content>
                <S.Content key={"emailId"}>{content.emailId}</S.Content>
                <S.Content key={"birthday"}>{content.birthday}</S.Content>
                <S.Content key={"phoneNumber"}>{content.phoneNumber}</S.Content>
                <S.Content key={"gender"}>{content.gender}</S.Content>
                <S.Content key={"permission"}>{content.permission}</S.Content>
              </S.ContentHover>

              <S.ModifyButton
                onClick={() => {
                  onClickModifyButton();
                }}
              >
                설정
              </S.ModifyButton>
            </S.ContentBar>
          ))}
        </S.ContentContainer>
        {onModal && <AccountModal />}
      </S.ManageBox>
    </>
  );
}
