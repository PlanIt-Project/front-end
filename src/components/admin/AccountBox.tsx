import { useState } from "react";
import { ACCOUNT_NAMES } from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import AccountModal from "./AccountModal";
import {
  useAdminAccountDetailStore,
  useAdminAccountStore,
} from "../../stores/adminAccountStore";
import { IAdminAccountContent } from "../../types/admin/Admin.account.types";
import AccountDetail from "./AccountDetail";
import { genderToKor, roleToKor } from "../../utils/adminFilter";

export default function AccountBox() {
  const [onModal, setOnModal] = useState(false);
  const [accountId, setAccountId] = useState(0);
  const [onDetail, setOnDetail] = useState(false);

  const { accountContent } = useAdminAccountStore();
  const { setAccountDetail } = useAdminAccountDetailStore();

  const onClickModifyButton = (id: number) => {
    setOnModal(!onModal);
    setAccountId(id);
  };

  const onClickDetail = (content: IAdminAccountContent) => {
    setOnDetail(true);
    setAccountDetail(content);
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
          {accountContent.map((content) => (
            <S.ContentBar key={content.id} $nameNumber={7}>
              <S.ContentHover
                $nameNumber={7}
                onClick={() => {
                  onClickDetail(content);
                }}
              >
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"name"}>{content.name}</S.Content>
                <S.LongContent key={"email"}>{content.email}</S.LongContent>
                <S.Content key={"birth"}>{content.birth}</S.Content>
                <S.Content key={"phone_number"}>
                  {content.phone_number}
                </S.Content>
                <S.Content key={"gender"}>
                  {genderToKor(content.gender)}
                </S.Content>
                <S.Content key={"role"}>{roleToKor(content.role)}</S.Content>
              </S.ContentHover>
              {content.role === "MEMBER" ? (
                <S.ModifyButton
                  onClick={() => {
                    onClickModifyButton(content.id);
                  }}
                >
                  설정
                </S.ModifyButton>
              ) : (
                <S.DisableButton>설정</S.DisableButton>
              )}
            </S.ContentBar>
          ))}
        </S.ContentContainer>
        {onModal && <AccountModal setOnModal={setOnModal} id={accountId} />}
        {onDetail && <AccountDetail setOnDetail={setOnDetail} />}
      </S.ManageBox>
    </>
  );
}
