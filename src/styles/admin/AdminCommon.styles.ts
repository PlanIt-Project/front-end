import styled from "styled-components";
import { CommonButton } from "../globalStyles";

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
`;

export const AdminContent = styled.div`
  width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: var(--background-color-100);
`;

export const Title = styled.h1`
  margin-top: 50px;
  font-size: var(--font-size-100);
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 80px;
  margin-right: 100px;
`;

export const SelectButton = styled.select`
  height: 55px;
  width: 150px;
  padding-left: 20px;
  border-radius: 10px;
  border: 1px solid var(--white-color-400);
  font-size: var(--font-size-600);
  font-weight: 600;
  color: #595959;
  &:focus {
    outline: none;
    outline: 2px solid var(--main-color-300);
  }
`;
export const SelectOption = styled.option`
  font-weight: 600;
  color: #595959;
  height: 50px;
`;

export const MakeButton = styled(CommonButton)`
  color: white;
  width: 100px;
  font-size: var(--font-size-500);
  background-color: var(--main-color-400);
  align-self: flex-end;
  margin-right: 120px;
  &:hover {
    background-color: var(--main-color-300);
  }
`;

export const ManageBox = styled.div`
  width: 85%;
  min-height: 500px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

export const NameBar = styled.div<{ $nameNumber?: number }>`
  background-color: var(--main-color-300);
  color: white;
  border-radius: 20px 20px 0 0;
  display: grid;
  grid-template-columns: ${(props) =>
    props.$nameNumber ? `repeat(${props.$nameNumber}, 1fr)` : `repeat(7, 1fr)`};
  justify-items: center;
  align-items: center;
  margin-top: 30px;
  padding: 30px 0;
`;

export const Name = styled.span`
  font-size: var(--font-size-500);
`;

export const ContentContainer = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentBar = styled.li<{ $nameNumber?: number }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$nameNumber ? `${props.$nameNumber}fr 1fr` : `6fr 1fr`};
  justify-items: center;
  align-items: center;
  width: 1020px;
  height: 70px;
  &:hover {
    background-color: var(--main-color-200);
    cursor: pointer;
  }
`;

export const ContentHover = styled.div<{ $nameNumber?: number }>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.$nameNumber ? `repeat(${props.$nameNumber}, 1fr)` : `repeat(6, 1fr)`};
  justify-items: center;
  align-items: center;
`;

export const Content = styled.span`
  font-size: var(--font-size-600);
`;

export const ModifyButton = styled(CommonButton)`
  width: 80px;
  height: 20px;
  font-size: var(--font-size-500);
  color: white;
  background-color: var(--main-color-400);
  &:hover {
    background-color: var(--main-color-300);
  }
`;
