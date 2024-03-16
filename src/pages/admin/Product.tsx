import styled from "styled-components";
import { CommonButton } from "../../styles/globalStyles";

export default function Product() {
  const names = [
    {
      id: 1,
      value: "id",
    },
    {
      id: 2,
      value: "이름",
    },
    {
      id: 3,
      value: "종류",
    },
    {
      id: 4,
      value: "기간/횟수",
    },
    {
      id: 5,
      value: "가격",
    },
    {
      id: 6,
      value: "상품수정",
    },
  ];
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
    <AdminContainer>
      <AdminContent>
        <Title>상품관리</Title>
        <MakeButton>상품추가</MakeButton>
        <ManageBox>
          <NameBar>
            {names.map((name) => (
              <Name key={name.id}>{name.value}</Name>
            ))}
          </NameBar>
          <ContentContainer>
            {contents.map((content) => (
              <ContentBar key={content.id}>
                <Content>{content.id}</Content>
                <Content>{content.name}</Content>
                <Content>{content.type}</Content>
                <Content>
                  {content.type === "패키지"
                    ? `${content.period}/${content.number}회`
                    : `${content.period}`}
                </Content>
                <Content>{content.price} 원</Content>
                <ModifyButton>수정</ModifyButton>
              </ContentBar>
            ))}
          </ContentContainer>
        </ManageBox>
      </AdminContent>
    </AdminContainer>
  );
}

const AdminContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AdminContent = styled.div`
  width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: var(--background-color-100);
`;

const Title = styled.h1`
  margin-top: 50px;
  font-size: var(--font-size-100);
  font-weight: 600;
`;

const MakeButton = styled(CommonButton)`
  align-self: flex-end;
  margin-right: 100px;
  color: white;
  width: 100px;
  font-size: var(--font-size-500);
  background-color: var(--main-color-400);
  &:hover {
    background-color: var(--main-color-300);
  }
`;

const ManageBox = styled.div`
  width: 85%;
  min-height: 500px;
  height: 70vh;
  display: flex;
  flex-direction: column;
`;

const NameBar = styled.div`
  background-color: var(--main-color-300);
  color: white;
  border-radius: 20px 20px 0 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;
  margin-top: 30px;
  padding: 30px 0;
`;

const Name = styled.span`
  font-size: var(--font-size-500);
`;

const ContentContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ContentBar = styled.li`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;
  padding: 10px 0;
`;
const Content = styled.span`
  font-size: var(--font-size-500);
`;
const ModifyButton = styled(CommonButton)`
  width: 80px;
  height: 20px;
  font-size: var(--font-size-500);
  color: white;
  background-color: var(--main-color-400);
  &:hover {
    background-color: var(--main-color-300);
  }
`