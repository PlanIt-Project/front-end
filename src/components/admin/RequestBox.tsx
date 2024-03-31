import { useState } from "react";
import {
  REQUEST_CONTENTS,
  REQUEST_NAMES,
} from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import RequestDetail from "./RequestDetail";
import RequestModal from "./RequestModal";

export default function RequestBox() {
  const [onModal, setOnModal] = useState(false);
  const [onDetail, setOnDetail] = useState<boolean>(false);
  const [detailId, setDetailId] = useState<number>(0);

  const onSetDetail = (id: number) => {
    setOnDetail(!onDetail);
    setDetailId(id);
  };

  const onClickModifyButton = (id: number) => {
    setOnModal(!onModal);
    setDetailId(id);
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
          {REQUEST_CONTENTS.map((content) => (
            <S.ContentBar key={content.id} $nameNumber={7}>
              <S.ContentHover
                $nameNumber={7}
                onClick={() => {
                  onSetDetail(content.id);
                }}
              >
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"registrationAt"}>
                  {content.registrationAt}
                </S.Content>
                <S.Content key={"productName"}>{content.productName}</S.Content>
                <S.Content key={"member"}>{content.member}</S.Content>
                <S.Content key={"trainer"}>{content.trainer}</S.Content>
                <S.Content key={"totalPrice"}>{content.totalPrice}</S.Content>
                <S.Content key={"status"}>{content.status}</S.Content>
              </S.ContentHover>
              {content.status === "취소됨" ? (
                <S.DisableButton>설정</S.DisableButton>
              ) : (
                <S.ModifyButton
                  onClick={() => {
                    onClickModifyButton(content.id);
                  }}
                >
                  설정
                </S.ModifyButton>
              )}
            </S.ContentBar>
          ))}
        </S.ContentContainer>
      </S.ManageBox>
      {onDetail && <RequestDetail setOnDetail={setOnDetail} id={detailId} />}
      {onModal && <RequestModal setOnModal={setOnModal} id={detailId} />}
    </>
  );
}
