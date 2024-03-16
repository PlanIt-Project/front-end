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
    },
    {
      id: 2,
      name: "개인레슨 6개월",
      type: "패키지",
      period: "6개월",
      number: 48,
      price: 1320000,
    },
    {
      id: 3,
      name: "헬스 이용권 3개월",
      type: "시설이용",
      period: "3개월",
      number: 0,
      price: 170000,
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
        {contents.map((content) => (
          <S.ContentBar key={content.id}>
            <S.Content>{content.id}</S.Content>
            <S.Content>{content.name}</S.Content>
            <S.Content>{content.type}</S.Content>
            <S.Content>
              {content.type === "패키지"
                ? `${content.period}/${content.number}회`
                : `${content.period}`}
            </S.Content>
            <S.Content>{content.price} 원</S.Content>
            <S.ModifyButton>수정</S.ModifyButton>
          </S.ContentBar>
        ))}
      </S.ContentContainer>
    </S.ManageBox>
  );
}
