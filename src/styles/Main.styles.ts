import styled from "styled-components";
import { breakPoints } from "./breakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc((var(--vh, 1vh) * 100) - 90px);
`;

export const BannerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40%;
  border: 1px solid gray;
  overflow: hidden;
`;

export const BannerLeftArrow = styled.button<{ $disabled: boolean }>`
  position: absolute;
  left: 1%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: var(--white-color-600);
  opacity: ${(props) => props.$disabled && "0.4"};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  z-index: 2;
`;

export const BannerRightArrow = styled.button<{ $disabled: boolean }>`
  position: absolute;
  right: 1%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: var(--white-color-600);
  opacity: ${(props) => props.$disabled && "0.4"};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  z-index: 2;
`;

export const ArrowIcon = styled.img`
  width: 80%;
  height: 80%;
`;

export const Banner = styled.div<{ $translateX: number }>`
  min-width: 100%;
  height: 100%;
  transform: ${(props) => `translateX(-${props.$translateX}%)`};
`;

export const TrainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  gap: 5%;
`;

export const Title = styled.div`
  font-size: var(--font-size-300);
  font-weight: 700;
  height: 5%;
  padding: 0 5px;

  @media screen and (max-width: ${breakPoints.medium}px) {
    font-size: var(--font-size-400);
  }

  @media screen and (max-width: ${breakPoints.small}px) {
    font-size: var(--font-size-500);
  }
`;

export const ContentsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  padding: 10px;
  gap: 15px;
  border: 1px solid gray;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 400px;
  height: 80%;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;

  @media screen and (max-width: ${breakPoints.small}px) {
    min-width: 300px;
  }
`;

export const ImageNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 35%;
  height: 60%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid gray;

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 25%;
    height: 30%;
  }
`;

export const Name = styled.p`
  font-size: var(--font-size-500);
  font-weight: 700;
`;

export const InfoContainer = styled.div`
  width: 57%;
  height: 80%;
  padding: 10px;
  font-size: var(--font-size-400);
  border: 1px solid gray;

  @media screen and (max-width: ${breakPoints.small}px) {
    width: 65%;
    font-size: var(--font-size-500);
  }
`;
