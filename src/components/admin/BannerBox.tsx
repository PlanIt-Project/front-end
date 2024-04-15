import { useState } from "react";
import { BANNER_NAMES } from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import BannerDetail from "./BannerDetail";
import BannerModal from "./BannerModal";
import {
  useAdminBannerDetailStore,
  useAdminBannerStore,
} from "../../stores/adminBannerStore";
import { IAdminBannerContent } from "../../types/admin/Admin.banner.types";

export default function BannerBox() {
  const [onModal, setOnModal] = useState(false);
  const [onDetail, setOnDetail] = useState<boolean>(false);

  const { bannerContent } = useAdminBannerStore();
  const { setBannerDetail } = useAdminBannerDetailStore();

  const onSetDetail = (content: IAdminBannerContent) => {
    setOnDetail(!onDetail);
    setBannerDetail(content);
  };

  const onClickModifyButton = (content: IAdminBannerContent) => {
    setOnModal(!onModal);
    setBannerDetail(content);
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
          {bannerContent.map((content) => (
            <S.ContentBar key={content.id} $nameNumber={4}>
              <S.ContentHover
                $nameNumber={4}
                onClick={() => {
                  onSetDetail(content);
                }}
              >
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"name"}>{content.title}</S.Content>
                <S.Content key={"startAt"}>{content.startAt}</S.Content>
                <S.Content key={"endAt"}>{content.endAt}</S.Content>
              </S.ContentHover>
              <S.ModifyButton
                onClick={() => {
                  onClickModifyButton(content);
                }}
              >
                설정
              </S.ModifyButton>
            </S.ContentBar>
          ))}
        </S.ContentContainer>
      </S.ManageBox>
      {onDetail && <BannerDetail setOnDetail={setOnDetail} />}
      {onModal && <BannerModal setOnModal={setOnModal} />}
    </>
  );
}
