import { useEffect, useState } from "react";
import { useAdminBannerDetailStore, useAdminBannerTriggerStore } from "../../stores/adminBannerStore";
import * as S from "../../styles/admin/AdminDetail.styles";
import { IDetail } from "../../types/admin/Admin.types";
import BannerDeleteModal from "./BannerDeleteModal";

export default function BannerDetail({ setOnDetail }: IDetail) {
  const api = process.env.REACT_APP_API_URL ?? "";

  const [onDelete, setOnDelete] = useState<boolean>(false);
  const { bannerTrigger, setBannerTrigger } = useAdminBannerTriggerStore();
  const { bannerDetail } = useAdminBannerDetailStore();

  const onCloseButton = () => {
    setOnDetail(false);
  };

  const onDeleteButton = () => {
    setOnDelete(true);
  };

  useEffect(()=>{
    if(!bannerTrigger){
      setBannerTrigger(true)
      setOnDetail(false)
    } 
  },[bannerTrigger])
  return (
    <>
      <S.Overlay>
        <S.Detail $width={730}>
          <S.DetailTitle>배너 상세</S.DetailTitle>
          <S.DetailContent>
            <S.DetailName>배너 제목:</S.DetailName>
            <S.DetailText>{bannerDetail.title}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>배너 이미지:</S.DetailName>
            <S.DetailImage src={`${api}${bannerDetail.imagePath}`} />
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>시작 시간:</S.DetailName>
            <S.DetailText>{bannerDetail.startAt}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>종료 시간:</S.DetailName>
            <S.DetailText>{bannerDetail.endAt}</S.DetailText>
          </S.DetailContent>
          <S.ButtonContainer>
            <S.DetailButton
              onClick={() => {
                onDeleteButton();
              }}
            >
              삭제
            </S.DetailButton>
            <S.DetailButton
              onClick={() => {
                onCloseButton();
              }}
            >
              닫기
            </S.DetailButton>
          </S.ButtonContainer>
        </S.Detail>
      </S.Overlay>
      {onDelete && (
        <BannerDeleteModal setOnModal={setOnDelete} id={bannerDetail.id} />
      )}
    </>
  );
}
