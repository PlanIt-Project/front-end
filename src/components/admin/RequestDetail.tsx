import * as S from "../../styles/admin/AdminDetail.styles";
import { IDetail } from "../../types/admin/Admin.types";

export default function RequestDetail({ setOnDetail, id }: IDetail) {
  const onCloseButton = () => {
    setOnDetail(false);
  };

  return (
    <>
      <S.Overlay>
        <S.Detail>
          <S.DetailTitle>등록 요청 상세</S.DetailTitle>
          <S.DetailContent>
            <S.DetailName>등록 일자:</S.DetailName>
            <S.DetailText>2012-01-02 {id}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>환불 일자:</S.DetailName>
            <S.DetailText>없음</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>상품명:</S.DetailName>
            <S.DetailText>개인레슨 3개월</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>회원명:</S.DetailName>
            <S.DetailText>홍길동</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>트레이너명:</S.DetailName>
            <S.DetailText>길동홍</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>결제금액:</S.DetailName>
            <S.DetailText>140000</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>할인금액:</S.DetailName>
            <S.DetailText>0</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>상태:</S.DetailName>
            <S.DetailText>승인 대기 중</S.DetailText>
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
