import styled from "styled-components";
import { CommonButton } from "../globalStyles";

export const AdminContainer = styled.div`
  display: flex;
  justify-content: center;
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

export const MakeButton = styled(CommonButton)`
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

export const ManageBox = styled.div`
  width: 85%;
  min-height: 500px;
  height: 70vh;
  display: flex;
  flex-direction: column;
`;

export const NameBar = styled.div`
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

export const Name = styled.span`
  font-size: var(--font-size-500);
`;

export const ContentContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ContentBar = styled.li`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;
  padding: 10px 0;
`;
export const Content = styled.span`
  font-size: var(--font-size-500);
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
`