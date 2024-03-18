import { useState } from "react";
import * as S from "../../styles/admin/AdminCommon.styles";
import ProductBox from "../../components/admin/ProductBox";
import ProductModal from "../../components/admin/ProductModal";

export default function Product() {
  const [onModal, setOnModal] = useState(false);

  const onClickMakeButton = () => {
    setOnModal(!onModal);
  };

  return (
    <>
      <S.AdminContainer>
        <S.AdminContent>
          <S.Title>상품관리</S.Title>
          <S.MakeButton
            onClick={() => {
              onClickMakeButton();
            }}
          >
            상품추가
          </S.MakeButton>
          <ProductBox />
        </S.AdminContent>
      </S.AdminContainer>
      {onModal && <ProductModal setOnModal={setOnModal} isModify={false} />}
    </>
  );
}
