import styled from "styled-components";

export const SelectBox = styled.div<{
  $isSelectBoxOpen: boolean;
  $width?: number;
  $height?: number;
}>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => (props.$width ? `${props.$width}px` : "200px")};
  height: ${(props) => (props.$height ? `${props.$height}px` : "25px")};
  padding: 10px;
  outline: none;
  border: ${(props) =>
    props.$isSelectBoxOpen
      ? "1px solid var(--main-color-500)"
      : "1px solid var(--white-color-700)"};
  border-radius: ${(props) =>
    props.$isSelectBoxOpen ? "10px 10px 0 0" : "10px"};
  font-size: var(--font-size-600);
  font-weight: 700;
  cursor: pointer;
`;

export const ArrowIcon = styled.div`
  width: 15px;
  height: 15px;
`;

export const OptionContainer = styled.div<{
  $isSelectBoxOpen: boolean;
  $width?: number;
}>`
  position: absolute;
  top: 46px;
  left: -1px;
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$width ? `${props.$width}px` : "100%")};
  border: 1px solid var(--main-color-500);
  border-top: none;
  border-radius: 0 0 10px 10px;
  background-color: var(--white-color-100);
  overflow: hidden;
  z-index: 2;
`;

export const Option = styled.div<{ $height?: number }>`
  display: flex;
  align-items: center;
  height: ${(props) => (props.$height ? `${props.$height}px` : "25px")};
  padding: 10px;
  font-size: var(--font-size-600);
  font-weight: normal;

  &:hover {
    background-color: var(--main-color-200);
    font-weight: 700;
  }
`;
