import { useState } from "react";
import * as S from "../../styles/admin/AdminCommon.styles";
import ProductBox from "../../components/admin/ProductBox";
import ProductModal from "../../components/admin/ProductModal";
import { useParams } from "react-router-dom";
import Pagenation from "../../components/CommonPagenation";

// TO DO, Modal과 Detail 컴포넌트로 분리
// Modal은 등록 관련해서 사용
// Detail은 id 관련으로 상세 조회할 때 사용
export default function Product() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));
  const [onModal, setOnModal] = useState(false);

  const onClickMakeButton = () => {
    setOnModal(!onModal);
  };

  return (
    <>
      <S.AdminContainer>
        <S.AdminContent>
          <S.Title>상품관리</S.Title>
          <S.ButtonContainer>
            <S.SelectButton>
              <S.SelectOption>판매중</S.SelectOption>
              <S.SelectOption>판매중지</S.SelectOption>
            </S.SelectButton>

          <S.MakeButton
            onClick={() => {
              onClickMakeButton();
            }}
          >
            상품추가
          </S.MakeButton>
          </S.ButtonContainer>
          
          <ProductBox />
        </S.AdminContent>
        <Pagenation
          page={page}
          totalPage={10}
          setPage={setPage}
          name={"admin/product"}
        />
      </S.AdminContainer>
      {onModal && <ProductModal setOnModal={setOnModal} />}
    </>
  );
}
