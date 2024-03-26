import { useState } from "react";
import {
  PRODUCT_CONTENTS,
  PRODUCT_NAMES,
} from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import ProductDetail from "./ProductDetail";
import ProductModal from "./ProductModal";

export default function ProductBox() {
  const [onModal, setOnModal] = useState(false);
  const [onDetail, setOnDetail] = useState<boolean>(false);
  const [detailId, setDetailId] = useState<number>(0);

  const onSetDetail = (id: number) => {
    setOnDetail(!onDetail);
    setDetailId(id);
  };

  const onClickModifyButton = () => {
    setOnModal(!onModal);
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
          {PRODUCT_CONTENTS.map((content) => (
            <S.ContentBar key={content.id} $nameNumber={6}>
              <S.ContentHover
                $nameNumber={6}
                onClick={() => {
                  onSetDetail(content.id);
                }}
              >
                <S.Content key={"id"}>{content.id}</S.Content>
                <S.Content key={"name"}>{content.name}</S.Content>
                <S.Content key={"type"}>{content.type}</S.Content>
                <S.Content key={"period/number"}>
                  {content.type === "패키지"
                    ? `${content.period}/${content.number}회`
                    : `${content.period}`}
                </S.Content>
                <S.Content key={"price"}>{content.price} 원</S.Content>
                <S.Content key={"saleOrNot"}>{content.saleOrNot}</S.Content>
              </S.ContentHover>
              <S.ModifyButton
                onClick={() => {
                  onClickModifyButton();
                }}
              >
                설정
              </S.ModifyButton>
            </S.ContentBar>
          ))}
        </S.ContentContainer>
      </S.ManageBox>
      {onDetail && <ProductDetail setOnDetail={setOnDetail} id={detailId} />}
      {onModal && <ProductModal setOnModal={setOnModal}/>}
    </>
  );
}
