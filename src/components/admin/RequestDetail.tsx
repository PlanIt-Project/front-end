import { useAdminRequestDetailStore } from "../../stores/adminRequestStore";
import * as S from "../../styles/admin/AdminDetail.styles";
import { IDetail } from "../../types/admin/Admin.types";
import { requestStatusToKor, skipNull } from "../../utils/adminFilter";

export default function RequestDetail({ setOnDetail}: IDetail) {
  const { requestDetail } = useAdminRequestDetailStore();

  const onCloseButton = () => {
    setOnDetail(false);
  };

  return (
    <>
      <S.Overlay>
        <S.Detail>
          <S.DetailTitle>승인 요청 상세</S.DetailTitle>
          <S.DetailContent>
            <S.DetailName>등록 일자:</S.DetailName>
            <S.DetailText>{requestDetail.registrationAt.slice(0, 10)}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>환불 일자:</S.DetailName>
            <S.DetailText>{skipNull(requestDetail.refundAt.slice(0, 10), "date")}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>상품명:</S.DetailName>
            <S.DetailText>{requestDetail.product.name}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>회원명:</S.DetailName>
            <S.DetailText>{requestDetail.member.name}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>트레이너명:</S.DetailName>
            <S.DetailText>{}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>결제금액:</S.DetailName>
            <S.DetailText>{requestDetail.totalPrice} 원</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>할인금액:</S.DetailName>
            <S.DetailText>{requestDetail.discount} 원</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>상태:</S.DetailName>
            <S.DetailText>{requestStatusToKor(requestDetail.status)}</S.DetailText>
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
