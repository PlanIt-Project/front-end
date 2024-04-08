import { useState } from "react";
import {
    BANNER_CONTENTS,
    BANNER_NAMES,
} from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import BannerDetail from "./BannerDetail";
import BannerModal from "./BannerModal";

export default function BannerBox() {
  const [onModal, setOnModal] = useState(false);
  const [onDetail, setOnDetail] = useState<boolean>(false);

  const onSetDetail = () => {
    setOnDetail(!onDetail);
  };

  const onClickModifyButton = () => {
    setOnModal(!onModal);
  };

  return (
    <>
      <S.ManageBox>
        <S.NameBar $nameNumber={5}>
          {BANNER_NAMES.map((name) => (
            <S.Name key={name.id}>{name.value}</S.Name>
          ))}
        </S.NameBar>
        <S.ContentContainer>
          {BANNER_CONTENTS.map((content) => (
            <S.ContentBar key={content.id} $nameNumber={4}>
              <S.ContentHover
                $nameNumber={4}
                onClick={() => {
                  onSetDetail();
                }}
              >
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"name"}>{content.name}</S.Content>
                <S.Content key={"date"}>{content.date}</S.Content>
                <S.Content key={"view"}>{content.view}</S.Content>
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
      </S.ManageBox>
      {onDetail && <BannerDetail setOnDetail={setOnDetail} />}
      {onModal && <BannerModal setOnModal={setOnModal}/>}
    </>
  );
}
