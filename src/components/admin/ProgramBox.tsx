import { useState } from "react";
import { PROGRAM_NAMES } from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import ProgramDetail from "./ProgramDetail";
import ProgramModal from "./ProgramModal";
import { useAdminProgramStore } from "../../stores/adminProgramStore";

export default function ProgramBox() {
  const [onModal, setOnModal] = useState(false);
  const [onDetail, setOnDetail] = useState<boolean>(false);
  const [detailId, setDetailId] = useState<number>(0);
  const { programContent } = useAdminProgramStore();
  const onSetDetail = (id: number) => {
    setOnDetail(!onDetail);
    setDetailId(id);
  };

  const onClickModifyButton = (id: number) => {
    setOnModal(!onModal);
    setDetailId(id);
  };

  const statusToKor = (status: string): string => {
    let kor = "";
    switch (status) {
      case "NOT_STARTED":
        kor = "등록 전";
        break;
      case "IN_PROGRESS":
        kor = "진행 중";
        break;
      case "SUSPEND":
        kor = "일시 정지";
        break;
      case "REFUND":
        kor = "환불";
        break;
      case "EXPIRED":
        kor = "만료";
        break;
      default:
        kor = "알 수 없음";
        break;
    }
    return kor;
  };

  const skipNull = (date:string):string => {
    if(date === null) return "미정"
    else return date
  }

  return (
    <>
      <S.ManageBox>
        <S.NameBar $nameNumber={7}>
          {PROGRAM_NAMES.map((name) => (
            <S.Name key={name.id}>{name.value}</S.Name>
          ))}
        </S.NameBar>
        <S.ContentContainer>
          {programContent.map((content) => (
            <S.ContentBar key={content.id} $nameNumber={6}>
              <S.ContentHover
                $nameNumber={6}
                onClick={() => {
                  onSetDetail(content.id);
                }}
              >
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"productName"}>{content.productName}</S.Content>
                <S.Content key={"remainedNumber"}>
                  {content.remainedNumber}
                </S.Content>
                <S.DateContent>
                  <S.Content key={"startAt"}>{skipNull(content.startAt)}/</S.Content>
                  <S.Content key={"endAt"}>{skipNull(content.endAt)}</S.Content>
                </S.DateContent>
                <S.DateContent>
                  <S.Content
                    key={"suspendAt"}
                  >{skipNull(content.suspendAt)}/</S.Content>
                  <S.Content
                    key={"resumeAt"}
                  >{skipNull(content.resumeAt)}</S.Content>
                </S.DateContent>
                <S.Content key={"status"}>{statusToKor(content.status)}</S.Content>
              </S.ContentHover>
              <S.ModifyButton
                onClick={() => {
                  onClickModifyButton(content.id);
                }}
              >
                설정
              </S.ModifyButton>
            </S.ContentBar>
          ))}
        </S.ContentContainer>
      </S.ManageBox>
      {onDetail && <ProgramDetail setOnDetail={setOnDetail} id={detailId} />}
      {onModal && <ProgramModal setOnModal={setOnModal} id={detailId} />}
    </>
  );
}
