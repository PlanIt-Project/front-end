import { useState } from "react";
import * as S from "../../styles/admin/AdminDetail.styles";
import { IProductDetail } from "../../types/admin/Product.types";

export default function ProductDetail({ setOnDetail, id }: IProductDetail) {
  const [onLittleModal, setOnLittleModal] = useState<boolean>(false);

  const onCloseButton = () => {
    setOnDetail(false);
  };

  const onChangeStatus = () => {
    setOnLittleModal(!onLittleModal);
  };
  return (
    <>
      <S.Overlay>
        <S.Detail>
            <S.DetailTitle>상품 상세</S.DetailTitle>
          <S.DetailContent>
            <S.DetailName>이름:</S.DetailName>
            <S.DetailText>개인레슨 3개월{id}</S.DetailText>
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
                onChangeStatus();
              }}
            >
              판매 상태 변경
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
      {onLittleModal && (
        <S.Overlay>
          <S.LittleModal>
            <S.LittleModalTitle>판매 상태를 변경 하시겠습니까?</S.LittleModalTitle>
            <S.LittleModalText>{"판매중 => 판매 중지"}</S.LittleModalText>
            <S.ButtonContainer>
            <S.DetailButton
            >
              변경
            </S.DetailButton>
            <S.DetailButton
              onClick={() => {
                onChangeStatus();
              }}
            >
              취소
            </S.DetailButton>
          </S.ButtonContainer>
          </S.LittleModal>
        </S.Overlay>
      )}
    </>
  );
}
