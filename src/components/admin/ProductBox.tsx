import { useState } from "react";
import { PRODUCT_NAMES } from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import ProductDetail from "./ProductDetail";
import ProductModal from "./ProductModal";
import {
  useAdminProductDetailStore,
  useAdminProductStore,
} from "../../stores/adminProductStore";
import { IAdminProductContent } from "../../types/admin/Admin.product.types";
import {
  parsePeriod,
  sellingTypeToKor,
  typeToKor,
} from "../../utils/adminFilter";

export default function ProductBox() {
  const [onModal, setOnModal] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number>(0);
  const [onDetail, setOnDetail] = useState<boolean>(false);
  const { productContent } = useAdminProductStore();
  const { setProductDetail } = useAdminProductDetailStore();

  const onSetDetail = (content: IAdminProductContent) => {
    setOnDetail(!onDetail);
    setProductDetail(content);
  };

  const onClickModifyButton = (id: number) => {
    setOnModal(!onModal);
    setModalId(id);
  };

  return (
    <>
      <S.ManageBox>
        <S.NameBar $nameNumber={7}>
          {PRODUCT_NAMES.map((name) => (
            <S.Name key={name.id}>{name.value}</S.Name>
          ))}
        </S.NameBar>
        <S.ContentContainer>
          {productContent.map((content) => (
            <S.ContentBar key={content.id} $nameNumber={6}>
              <S.ContentHover
                $nameNumber={6}
                onClick={() => {
                  onSetDetail(content);
                }}
              >
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"name"}>{content.name}</S.Content>
                <S.Content key={"type"}>{typeToKor(content.type)}</S.Content>
                <S.Content key={"period/number"}>
                  {content.type === "PT"
                    ? `${content.number}회`
                    : `${parsePeriod(content.period)}`}
                </S.Content>
                <S.Content key={"price"}>{content.price} 원</S.Content>
                <S.Content key={"sellingType"}>
                  {sellingTypeToKor(content.sellingType)}
                </S.Content>
              </S.ContentHover>
              <S.ModifyButton
                onClick={() => {
                  onClickModifyButton(content.id);
                }}
              >
                삭제
              </S.ModifyButton>
            </S.ContentBar>
          ))}
        </S.ContentContainer>
      </S.ManageBox>
      {onDetail && <ProductDetail setOnDetail={setOnDetail} />}
      {onModal && <ProductModal setOnModal={setOnModal} id={modalId} />}
    </>
  );
}
