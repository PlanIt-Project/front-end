import * as S from "../../styles/admin/AdminDetail.styles";
import { IDetail } from "../../types/admin/Admin.types";

export default function BannerDetail({ setOnDetail, id }: IDetail) {

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
            <S.DetailText>오픈 이벤트{id}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>배너 이미지:</S.DetailName>
            <S.DetailImage/>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>노출 여부:</S.DetailName>
            <S.DetailText>N</S.DetailText>
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
