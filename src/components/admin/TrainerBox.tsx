import { useState } from "react";
import { TRAINER_NAMES } from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import TrainerModal from "./TrainerModal";
import TrainerDetail from "./TrainerDetail";
import { IAdminTrainerContent } from "../../types/admin/Admin.trainer.types";
import {
  useAdminTrainerDetailStore,
  useAdminTrainerStore,
} from "../../stores/adminTrainerStore";
import { parsePeriod } from "../../utils/adminFilter";

export default function TrainerBox() {
  const [onModal, setOnModal] = useState(false);
  const [onDetail, setOnDetail] = useState(false);
  const { trainerContent } = useAdminTrainerStore();
  const { setTrainerDetail } = useAdminTrainerDetailStore();

  const onSetDetail = (content: IAdminTrainerContent) => {
    setOnDetail(true);
    setTrainerDetail(content);
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
          {trainerContent.map((content) => (
            <S.ContentBar key={content.id} $nameNumber={6}>
              <S.ContentHover
                $nameNumber={6}
                onClick={() => {
                  onSetDetail(content);
                }}
              >
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"name"}>{content.name}</S.Content>
                <S.Content key={"email"}>{content.email}</S.Content>
                <S.Content key={"birth"}>{content.birth}</S.Content>
                <S.Content key={"phone_number"}>
                  {content.phone_number}
                </S.Content>
                <S.Content key={"career"}>
                  {parsePeriod(`P${content.career}`)}
                </S.Content>
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
        {onDetail && <TrainerDetail setOnDetail={setOnDetail} />}
      </S.ManageBox>
    </>
  );
}
