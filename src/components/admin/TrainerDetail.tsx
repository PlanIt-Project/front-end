import * as S from "../../styles/admin/AdminDetail.styles";
import { IDetail } from "../../types/admin/Admin.types";

export default function TrainerDetail({ setOnDetail }: IDetail) {
  const onCloseButton = () => {
    setOnDetail(false);
  };
  return (
    <S.Overlay>
      <S.Detail>
        <S.DetailTitle>트레이너 상세</S.DetailTitle>
        <S.DetailContent>
          <S.DetailName>이름:</S.DetailName>
          <S.DetailText>개인레슨 3개월</S.DetailText>
        </S.DetailContent>
        <S.DetailContent>
          <S.DetailName>종류: </S.DetailName>
          <S.DetailText>패키지</S.DetailText>
        </S.DetailContent>
        <S.DetailContent>
          <S.DetailName>기간:</S.DetailName>
          <S.DetailText>3개월</S.DetailText>
        </S.DetailContent>
        <S.DetailContent>
          <S.DetailName>횟수:</S.DetailName>
          <S.DetailText>24회</S.DetailText>
        </S.DetailContent>
        <S.DetailContent>
          <S.DetailName>가격:</S.DetailName>
          <S.DetailText>140000원</S.DetailText>
        </S.DetailContent>
        <S.DetailContent>
          <S.DetailName>판매 상태:</S.DetailName>
          <S.DetailText>판매중</S.DetailText>
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
  );
}
