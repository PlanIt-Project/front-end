import { useState } from "react";
import { PROGRAM_NAMES } from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import ProgramDetail from "./ProgramDetail";
import ProgramModal from "./ProgramModal";
import {
  useAdminProgramDetailStore,
  useAdminProgramStore,
} from "../../stores/adminProgramStore";
import { IAdminProgramContent } from "../../types/admin/Admin.program.types";
import { skipNull, statusToKor } from "../../utils/adminFilter";

export default function ProgramBox() {
  const [onModal, setOnModal] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number>(0);
  const [onDetail, setOnDetail] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const { programContent } = useAdminProgramStore();
  const { setProgramDetail } = useAdminProgramDetailStore();

  const onSetDetail = (detail: IAdminProgramContent) => {
    setOnDetail(!onDetail);
    setProgramDetail(detail);
  };

  const onClickModifyButton = (id: number, status: string) => {
    setOnModal(!onModal);
    setModalId(id);
    setStatus(status);
  };

  const statusOnModal = (status: string, type: "PT" | "MEMBERSHIP") => {
    if (
      type === "MEMBERSHIP" &&
      (status === "IN_PROGRESS" || status === "SUSPEND")
    )
      return true;
    else return false;
  };

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
                  onSetDetail(content);
                }}
              >
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"productName"}>{content.productName}</S.Content>
                <S.Content key={"remainedNumber"}>
                  {content.remainedNumber}
                </S.Content>
                <S.DateContent>
                  <S.Content key={"startAt"}>
                    {skipNull(content.startAt)}/
                  </S.Content>
                  <S.Content key={"endAt"}>{skipNull(content.endAt)}</S.Content>
                </S.DateContent>
                <S.DateContent>
                  <S.Content key={"suspendAt"}>
                    {skipNull(content.suspendAt)}/
                  </S.Content>
                  <S.Content key={"resumeAt"}>
                    {skipNull(content.resumeAt)}
                  </S.Content>
                </S.DateContent>
                <S.Content key={"status"}>
                  {statusToKor(content.status)}
                </S.Content>
              </S.ContentHover>
              {statusOnModal(content.status, content.type) ? (
                <S.ModifyButton
                  onClick={() => {
                    onClickModifyButton(content.id, content.status);
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
      {onDetail && <ProgramDetail setOnDetail={setOnDetail} />}
      {onModal && (
        <ProgramModal setOnModal={setOnModal} id={modalId} status={status} />
      )}
    </>
  );
}
