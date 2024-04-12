import { useAdminBannerDetailStore } from "../../stores/adminBannerStore";
import * as S from "../../styles/admin/AdminDetail.styles";
import { IDetail } from "../../types/admin/Admin.types";

export default function BannerDetail({ setOnDetail }: IDetail) {
  const { bannerDetail } = useAdminBannerDetailStore();

  const onCloseButton = () => {
    setOnDetail(false);
  };

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
            <S.DetailImage src={bannerDetail.imagePath} />
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
                onCloseButton();
              }}
            >
              닫기
            </S.DetailButton>
          </S.ButtonContainer>
        </S.Detail>
      </S.Overlay>
    </>
  );
}
