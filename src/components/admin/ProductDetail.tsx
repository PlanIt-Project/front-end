import { useAdminProductDetailStore } from "../../stores/adminProductStore";
import * as S from "../../styles/admin/AdminDetail.styles";
import { IDetail } from "../../types/admin/Admin.types";
import {
  parsePeriod,
  sellingTypeToKor,
  typeToKor,
} from "../../utils/adminFilter";

export default function ProductDetail({ setOnDetail }: IDetail) {
  const { productDetail } = useAdminProductDetailStore();

  const onCloseButton = () => {
    setOnDetail(false);
  };

  return (
    <>
      <S.Overlay>
        <S.Detail>
          <S.DetailTitle>상품 상세</S.DetailTitle>
          <S.DetailContent>
            <S.DetailName>이름:</S.DetailName>
            <S.DetailText>{productDetail.name}</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>종류: </S.DetailName>
            <S.DetailText>{typeToKor(productDetail.type)}</S.DetailText>
          </S.DetailContent>
          {productDetail.type === "MEMBERSHIP" ? (
            <S.DetailContent>
              <S.DetailName>기간:</S.DetailName>
              <S.DetailText>{parsePeriod(productDetail.period)}</S.DetailText>
            </S.DetailContent>
          ) : (
            <S.DetailContent>
              <S.DetailName>횟수:</S.DetailName>
              <S.DetailText>{productDetail.number}</S.DetailText>
            </S.DetailContent>
          )}
          <S.DetailContent>
            <S.DetailName>가격:</S.DetailName>
            <S.DetailText>{productDetail.price}원</S.DetailText>
          </S.DetailContent>
          <S.DetailContent>
            <S.DetailName>판매 상태:</S.DetailName>
            <S.DetailText>
              {sellingTypeToKor(productDetail.sellingType)}
            </S.DetailText>
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
