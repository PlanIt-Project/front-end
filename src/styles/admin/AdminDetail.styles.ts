import styled from "styled-components";
import { CommonButton } from "../globalStyles";

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Detail = styled.div<{ $width?: number }>`
  width: ${props => props.$width ? `${props.$width}px` : "550px"};
  height: fit-content;
  background: var(--background-color-100);
  border-radius: 20px;
  padding: 40px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;



export const DetailTitle = styled.div`
    font-size: var(--font-size-300);
    font-weight: 600;
    margin-bottom: 10px;
`

export const DetailContent = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 50px;
  width: 100%;
  margin-left: 70px;
`;

export const DetailName = styled.span`
  width: 150px;
  text-align: center;
  font-size: var(--font-size-400);
  font-weight: 600;
`;

export const DetailText = styled.span`
  font-size: var(--font-size-400);
  width: 230px;
  text-align: center;
`;

export const DetailImage = styled.img`
  width: 400px;
  height: 200px;
  border-radius: 10px;
  background-color: aliceblue;
`

export const DetailDateColumn = styled.span`
  display: flex;
  flex-direction: column;
`

export const DetailDateRow = styled.span`
  display: flex;
  flex-direction: row;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const DetailButton = styled(CommonButton)`
  color: white;
  width: 110px;
  font-size: var(--font-size-600);
  background-color: var(--main-color-400);
  &:hover {
    background-color: var(--main-color-300);
  }
`;

