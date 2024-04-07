import { useState } from "react";
import {
  TRAINER_CONTENTS,
  TRAINER_NAMES,
} from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import TrainerModal from "./TrainerModal";
import TrainerDetail from "./TrainerDetail";

export default function TrainerBox() {
  const [onModal, setOnModal] = useState(false);
  const [onDetail, setOnDetail] = useState(false);
  const [detailId, setDetailId] = useState<number>(0);

  const onSetDetail = (id: number) => {
    setDetailId(id);
    setOnDetail(true);
  };

  const onClickModifyButton = () => {
    setOnModal(!onModal);
  };
  return (
    <>
      <S.ManageBox>
        <S.NameBar $nameNumber={7}>
          {TRAINER_NAMES.map((name) => (
            <S.Name key={name.id}>{name.value}</S.Name>
          ))}
        </S.NameBar>
        <S.ContentContainer>
          {TRAINER_CONTENTS.map((content) => (
            <S.ContentBar key={content.id} $nameNumber={6}>
              <S.ContentHover
                $nameNumber={6}
                onClick={() => {
                  onSetDetail(content.id);
                }}
              >
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"name"}>{content.name}</S.Content>
                <S.Content key={"emailId"}>{content.emailId}</S.Content>
                <S.Content key={"birthday"}>{content.birthday}</S.Content>
                <S.Content key={"phoneNumber"}>{content.phoneNumber}</S.Content>
                <S.Content key={"gender"}>{content.gender}</S.Content>
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
        {onModal && <TrainerModal setOnModal={setOnModal} />}
        {onDetail && <TrainerDetail setOnDetail={setOnDetail} id={detailId} />}
      </S.ManageBox>
    </>
  );
}
