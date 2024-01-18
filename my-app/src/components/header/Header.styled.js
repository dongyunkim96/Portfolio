import { TypeAnimation } from "react-type-animation";
import { styled } from "styled-components";

export const Container = styled.div`
background: linear-gradient(to right, #a0f28c, #87ceeb);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5px;
  height: 750px;
  @media (min-width: 768px) {
    flex-direction: column-reverse;
    padding-top: 0;
    height: 100vh;
  }
`;

export const LeftContent = styled.div`
  margin-top: 4px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const Information = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3px;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 5x1;
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const AnimatedText = styled(TypeAnimation)`
  color: #ffed5a;
  font-size: 4x1;
  font-weight: bold;

  @media (max-width: 767px) {
    font-size: 3x1;
  }
`;