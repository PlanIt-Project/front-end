import { useState } from "react";
import { REQUEST_NAMES } from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import RequestDetail from "./RequestDetail";
import RequestModal from "./RequestModal";
import {
  useAdminRequestDetailStore,
  useAdminRequestStore,
} from "../../stores/adminRequestStore";
import { requestStatusToKor } from "../../utils/adminFilter";
import { IAdminRequestContent } from "../../types/admin/Admin.Request.types";

export default function RequestBox() {
  const [onModal, setOnModal] = useState(false);
  const [onDetail, setOnDetail] = useState<boolean>(false);
  const { requestContent } = useAdminRequestStore();
  const { setRequestDetail } = useAdminRequestDetailStore();

  const onSetDetail = (content: IAdminRequestContent) => {
    setOnDetail(!onDetail);
    setRequestDetail(content);
  };

  const onClickModifyButton = (content:IAdminRequestContent) => {
    setOnModal(!onModal);
    setRequestDetail(content);
  };

  return (
    <>
      <S.ManageBox>
        <S.NameBar $nameNumber={8}>
          {REQUEST_NAMES.map((name) => (
            <S.Name key={name.id}>{name.value}</S.Name>
          ))}
        </S.NameBar>
        <S.ContentContainer>
          {requestContent.map((content) => (
            <S.ContentBar key={content.id} $nameNumber={7}>
              <S.ContentHover
                $nameNumber={7}
                onClick={() => {
                  onSetDetail(content);
                }}
              >
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"registrationAt"}>
                  {content.registrationAt.slice(0, 10)}
                </S.Content>
                <S.Content key={"productName"}>
                  {content.product.name}
                </S.Content>
                <S.Content key={"member"}>{content.member.name}</S.Content>
                <S.Content key={"trainer"}>{}</S.Content>
                <S.Content key={"totalPrice"}>{content.totalPrice}원</S.Content>
                <S.Content key={"status"}>
                  {requestStatusToKor(content.status)}
                </S.Content>
              </S.ContentHover>
              {content.status === "PENDING" ? (
                <S.ModifyButton
                  onClick={() => {
                    onClickModifyButton(content);
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
      </S.ManageBox>
      {onDetail && <RequestDetail setOnDetail={setOnDetail} />}
      {onModal && <RequestModal setOnModal={setOnModal} />}
    </>
  );
}
