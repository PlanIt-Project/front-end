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
