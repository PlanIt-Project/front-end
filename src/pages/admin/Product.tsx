import { useState } from "react";
import * as S from "../../styles/admin/AdminCommon.styles";
import ProductBox from "../../components/admin/ProductBox";
import ProductModal from "../../components/admin/ProductModal";


// TO DO, Modal과 Detail 컴포넌트로 분리
// Modal은 등록 관련해서 사용
// Detail은 id 관련으로 상세 조회할 때 사용
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
      {onModal && <ProductModal setOnModal={setOnModal} />}
    </>
  );
}
