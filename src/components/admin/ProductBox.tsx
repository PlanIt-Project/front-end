import { useState } from "react";
import { PRODUCT_NAMES } from "../../constants/Admin.constants";
import * as S from "../../styles/admin/AdminCommon.styles";
import ProductDetail from "./ProductDetail";
import ProductModal from "./ProductModal";
import { useAdminProductStore } from "../../stores/adminProductStore";

export default function ProductBox() {
  const [onModal, setOnModal] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number>(0);
  const [onDetail, setOnDetail] = useState<boolean>(false);
  const [detailId, setDetailId] = useState<number>(0);
  const { productContent } = useAdminProductStore();

  const onSetDetail = (id: number) => {
    setOnDetail(!onDetail);
    setDetailId(id);
  };

  const onClickModifyButton = (id: number) => {
    setOnModal(!onModal);
    setModalId(id);
  };

  const typeToKor = (type: "PT" | "MEMBERSHIP"): string => {
    if (type === "MEMBERSHIP") return "맴버쉽";
    else return "PT";
  };

  const sellingTypeToKor = (sellingType: string): string => {
    if (sellingType === "SELLING") return "판매중";
    else return "판매중지";
  };

  const parsePeriod = (period: string): string => {
    const regex = /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?/;
    const matches = period.match(regex);

    if (!matches) {
      return "Invalid period format";
    }

    const [, years, months, days] = matches
      .slice(1)
      .map((value) => parseInt(value || "0", 10));
    const result = [];

    if (years) {
      result.push(`${years}년`);
    }

    if (months) {
      result.push(`${months}개월`);
    }

    if (days) {
      result.push(`${days}일`);
    }

    return result.join(" ");
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
                  onSetDetail(content.id);
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
      {onDetail && <ProductDetail setOnDetail={setOnDetail} id={detailId} />}
      {onModal && <ProductModal setOnModal={setOnModal} id={modalId} />}
    </>
  );
}
