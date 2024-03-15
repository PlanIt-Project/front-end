import styled from "styled-components";
import { breakPoints } from "../breakPoints";
import { CommonButton } from "../globalStyles";

export const Content = styled.button`
  font-size: var(--font-size-400);
  font-weight: 700;

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-600);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const AdminMenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 500px;
  border-bottom-left-radius: 20px;
  background-color: var(--main-color-300);
  box-shadow: 4px 3px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 250px;
  }
`;

export const AdminMenuTitle = styled.div`
  font-size: var(--font-size-300);
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-500);
  }
`;

export const AdminMenuContent = styled.div`
  font-size: var(--font-size-400);

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-600);
  }
`;

export const Profile = styled.button`
  margin-left: 10px;
  width: 40px;
  height: 40px;
  background-color: var(--white-color-500);
  border-radius: 100%;
  &:hover {
    box-shadow: 0 0 11px rgba(102, 102, 102, 0.25);
  }
`;

export const ProfileMenu = styled.div`
  position: absolute;
  top: 90px;
  right: 0;
  width: 320px;
  height: 150px;
  background-color: var(--main-color-300);
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;
  padding-top: 2%;
`;

export const Infomation = styled.div`
  font-size: var(--font-size-400);
  font-weight: 700;

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-600);
  }
`


export const ProfileButtons = styled.div`
  display: flex;
  gap: 20px;
`
export const Button = styled(CommonButton)`
  background-color: var(--main-color-400);
  width: 80px;
  height: 30px;
  font-size: var(--font-size-500);
  &:hover {
    background-color: var(--main-color-500);
  }
`