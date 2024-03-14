import styled from "styled-components";
import { IItemList } from "../../types/UserReservation.types";

interface IItemGridProps {
  item: IItemList;
}

export default function ItemGrid({ item }: IItemGridProps) {
  return (
    <Container>
      <Title>{item.name}</Title>
      <Contents>
        {item.startDate} ~ {item.endDate}
      </Contents>
      <Contents>
        <span className="strong">90일 남음</span> <span> / </span>{" "}
        <span> 총 90일</span>
      </Contents>
      <Contents>{item.trainer}</Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 300px;
  height: 150px;
  padding: 10px;
  border: 1px solid var(--main-color-500);
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: var(--font-size-400);
  font-weight: 700;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: var(--font-size-600);

  > span {
    &.strong {
      font-weight: 700;
    }
  }
`;
