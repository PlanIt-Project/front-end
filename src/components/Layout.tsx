import { Outlet } from "react-router";
import Header from "./Header";
import styled from "styled-components";

export default function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
