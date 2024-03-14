import styled from "styled-components";
import { breakPoints } from "./breakPoints";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px 5px 0px;
  width: calc(100% - 20px);
  height: 80px;
  background-color: #f6ffff;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 220px;
  height: 100px;
  margin-left: -20px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    width: 200px;
    height: 90px;
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 160px;
    height: 80px;
  }
`;

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Menu = styled.button`
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
`

export const AdminMenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 500px;
  border-bottom-left-radius: 20px;
  background-color: var(--main-color-300);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 250px;
  }
`

export const AdminMenuTitle = styled.div`
  font-size: var(--font-size-300);
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-500);
  }
`

export const AdminMenuContent = styled.div`
  font-size: var(--font-size-400);

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-600);
  }
`
