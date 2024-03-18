import { useState } from "react";
import {
  PRODUCT_CONTENTS,
  PRODUCT_NAMES,
} from "../../constants/Admin.constants";
import * as S from "../../styles/admin/Product.styles";
import ProductModal from "./ProductModal";

export default function ProductBox() {
  const [onModal, setOnModal] = useState(false);

  const onClickModifyButton = () => {
    setOnModal(!onModal);
  };
  return (
    <>
      <S.ManageBox>
        <S.NameBar>
          {PRODUCT_NAMES.map((name) => (
            <S.Name key={name.id}>{name.value}</S.Name>
          ))}
        </S.NameBar>
        <S.ContentContainer>
          {PRODUCT_CONTENTS.map((content) => (
            <S.ContentBar key={content.id}>
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
              <S.ModifyButton
                onClick={() => {
                  onClickModifyButton();
                }}
              >
                수정
              </S.ModifyButton>
            </S.ContentBar>
          ))}
        </S.ContentContainer>
      </S.ManageBox>
      {onModal && <ProductModal setOnModal={setOnModal} isModify={true}/>}
    </>
  );
}
