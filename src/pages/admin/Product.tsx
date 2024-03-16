import ProductBox from "../../components/admin/ProductBox";
import * as S from "../../styles/admin/Product.styles";

export default function Product() {
  

  return (
    <S.AdminContainer>
      <S.AdminContent>
        <S.Title>상품관리</S.Title>
        <S.MakeButton>상품추가</S.MakeButton>
        <ProductBox/>
      </S.AdminContent>
    </S.AdminContainer>
  );
}

