import { PRODUCT_NAMES } from "../../constants/Admin.constants";
import * as S from "../../styles/admin/Product.styles";

export default function ProductBox() {
  const contents = [
    {
      id: 1,
      name: "그룹레슨 3개월",
      type: "패키지",
      period: "3개월",
      number: 24,
      price: 440000,
      saleOrNot:"판매중"
    },
    {
      id: 2,
      name: "개인레슨 6개월",
      type: "패키지",
      period: "6개월",
      number: 48,
      price: 1320000,
      saleOrNot:"판매중"
    },
    {
      id: 3,
      name: "헬스 이용권 3개월",
      type: "시설이용",
      period: "3개월",
      number: 0,
      price: 170000,
      saleOrNot:"판매중지"
    },
    {
      id: 4,
      name: "헬스 이용권 3개월",
      type: "시설이용",
      period: "3개월",
      number: 0,
      price: 170000,
      saleOrNot:"판매중지"
    },
    {
      id: 5,
      name: "헬스 이용권 3개월",
      type: "시설이용",
      period: "3개월",
      number: 0,
      price: 170000,
      saleOrNot:"판매중지"
    },
    {
      id: 6,
      name: "헬스 이용권 3개월",
      type: "시설이용",
      period: "3개월",
      number: 0,
      price: 170000,
      saleOrNot:"판매중지"
    },
    {
      id: 7,
      name: "헬스 이용권 3개월",
      type: "시설이용",
      period: "3개월",
      number: 0,
      price: 170000,
      saleOrNot:"판매중지"
    },
    {
      id: 8,
      name: "헬스 이용권 3개월",
      type: "시설이용",
      period: "3개월",
      number: 0,
      price: 170000,
      saleOrNot:"판매중지"
    },
    {
      id: 9,
      name: "헬스 이용권 3개월",
      type: "시설이용",
      period: "3개월",
      number: 0,
      price: 170000,
      saleOrNot:"판매중지"
    },
    {
      id: 10,
      name: "헬스 이용권 3개월",
      type: "시설이용",
      period: "3개월",
      number: 0,
      price: 170000,
      saleOrNot:"판매중지"
    },
    {
      id: 11,
      name: "헬스 이용권 3개월",
      type: "시설이용",
      period: "3개월",
      number: 0,
      price: 170000,
      saleOrNot:"판매중지"
    },
    {
      id: 12,
      name: "헬스 이용권 3개월",
      type: "시설이용",
      period: "3개월",
      number: 0,
      price: 170000,
      saleOrNot:"판매중지"
    },
  ];
  return (
    <S.ManageBox>
      <S.NameBar>
        {PRODUCT_NAMES.map((name) => (
          <S.Name key={name.id}>{name.value}</S.Name>
        ))}
      </S.NameBar>
      <S.ContentContainer>
        {contents.map((content, i) => (
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
            <S.ModifyButton>수정</S.ModifyButton>
          </S.ContentBar>
        ))}
      </S.ContentContainer>
    </S.ManageBox>
  );
}
