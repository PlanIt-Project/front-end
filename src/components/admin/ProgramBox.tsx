import { useState } from "react";
import {
  PROGRAM_CONTENTS,
  PROGRAM_NAMES,
} from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import ProgramDetail from "./ProgramDetail";
import ProgramModal from "./ProgramModal";
import { useProgramOptionStore } from "../../stores/programStore";

export default function ProgramBox() {
  const [onModal, setOnModal] = useState(false);
  const [onDetail, setOnDetail] = useState<boolean>(false);
  const [detailId, setDetailId] = useState<number>(0);
  const { option } = useProgramOptionStore();

  const onSetDetail = (id: number) => {
    setOnDetail(!onDetail);
    setDetailId(id);
  };

  const onClickModifyButton = (id: number) => {
    setOnModal(!onModal);
    setDetailId(id);
  };

  console.log(option)
  return (
    <>
      <S.ManageBox>
        <S.NameBar $nameNumber={7}>
          {PROGRAM_NAMES.map((name) => (
            <S.Name key={name.id}>{name.value}</S.Name>
          ))}
        </S.NameBar>
        <S.ContentContainer>
          {PROGRAM_CONTENTS.map((content) => (
            <S.ContentBar key={content.id} $nameNumber={6}>
              <S.ContentHover
                $nameNumber={6}
                onClick={() => {
                  onSetDetail(content.id);
                }}
              >
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"name"}>{content.name}</S.Content>
                <S.Content key={"remainNumber"}>
                  {content.remainNumber}
                </S.Content>
                <S.DateContent>
                  <S.Content key={"startAt"}>{`${content.startAt}/`}</S.Content>
                  <S.Content key={"endAt"}>{`${content.endAt}`}</S.Content>
                </S.DateContent>
                <S.DateContent>
                  <S.Content
                    key={"suspendAt"}
                  >{`${content.suspendAt}/`}</S.Content>
                  <S.Content
                    key={"resumeAt"}
                  >{`${content.resumeAt}`}</S.Content>
                </S.DateContent>
                <S.Content key={"status"}>{content.status}</S.Content>
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
