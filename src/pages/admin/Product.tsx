import { useEffect, useState } from "react";
import * as S from "../../styles/admin/AdminCommon.styles";
import ProductBox from "../../components/admin/ProductBox";
import ProductMakeModal from "../../components/admin/ProductMakeModal";
import { useParams } from "react-router-dom";
import Pagination from "../../components/CommonPagination";
import { getAdminProduct } from "../../hooks/queries/admin/getProducts";
import { useAdminProductStore } from "../../stores/adminProductStore";

// TO DO, Modal과 Detail 컴포넌트로 분리
// Modal은 등록 관련해서 사용
// Detail은 id 관련으로 상세 조회할 때 사용
export default function Product() {
  const param = useParams();
  const [page, setPage] = useState(Number(param.pageId));
  const [onModal, setOnModal] = useState(false);
  const { setProductContent } = useAdminProductStore();
  const onClickMakeButton = () => {
    setOnModal(!onModal);
  };

  const { data } = getAdminProduct(page - 1, 8);

  useEffect(() => {
    if (data) {
      setProductContent(data.content);
    }
  }, [data]);

  return (
    <>
      <S.AdminContainer>
        <S.AdminContent>
          <S.Title>상품 관리</S.Title>
          <S.ButtonContainer>
            <S.MakeButton
              onClick={() => {
                onClickMakeButton();
              }}
            >
              상품 추가
            </S.MakeButton>
          </S.ButtonContainer>

          <ProductBox />
        </S.AdminContent>
        <Pagination
          page={page}
          totalPage={Number(data?.totalPages)}
          setPage={setPage}
          name={"admin/product"}
        />
      </S.AdminContainer>
      {onModal && <ProductMakeModal setOnModal={setOnModal} />}
    </>
  );
}
