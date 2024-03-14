import { styled } from "styled-components";

export const LoginSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color-400);
  margin: auto;
  color: white;
  border-radius: 10px;
  gap: 20px;
  padding: 20px 40px;

  h1 {
    font-size: var(--font-size-100);
  }

  p {
    font-size: var(--font-size-500);
    cursor: pointer;
  }
`;
