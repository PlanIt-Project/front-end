import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import leftArrow from "./../assets/svg/icon_small-left-arrow.svg"
import rightArrow from "./../assets/svg/icon_small-right-arrow.svg"

interface IPagination {
  page: number;
  totalPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  name: string;
}

export default function Pagination({
  page,
  totalPage,
  setPage,
  name,
}: IPagination) {
  const [currPage, setCurrPage] = useState<number>(page);
  const navigate = useNavigate();

  const firstNum = currPage - (((currPage - 1) % 5) + 1) + 1;
  return (
    <Container>
      <Button
        onClick={() => {
          setPage(page - 1);
          setCurrPage(page - 1);
          navigate(`/${name}/${page - 1}`);
        }}
        disabled={page === 1}
      >
        <Svg src={leftArrow}/>
      </Button>
      {[0, 1, 2, 3, 4].map((i) =>
        firstNum + i <= totalPage ? (
          <Button
            key={i + 1}
            $current={page === firstNum + i ? "page" : null}
            onClick={() => {
              setPage(firstNum + i);
              navigate(`/${name}/${firstNum + i}`);
            }}
          >
            {firstNum + i}{" "}
          </Button>
        ) : null,
      )}
      <Button
        onClick={() => {
          setPage(page + 1);
          setCurrPage(page+1);
          navigate(`/${name}/${page + 1}`);
        }}
        disabled={page === totalPage}
      >
        <Svg src={rightArrow}/>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: fit-content;
  gap: 8px;
`;

const Button = styled.button<{ $current?: string | null }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: none;
  background-color: ${(props) =>
    props.$current === "page" ? `#9bb1ff` : null};
  color: ${(props) => (props.$current === "page" ? "white" : null)};
  border: 1.5px solid #dfe3e8;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    background-color: #919eab;
    color: #c4cdd5;
  }
`;

const Svg = styled.img`
    width: 9px;
`