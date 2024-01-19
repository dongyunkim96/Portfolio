import { TypeAnimation } from "react-type-animation";
import { styled } from "styled-components";
import { FaPlay } from "react-icons/fa"

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

export const GrayParagraph = styled.p`
  font-size: 1.1rem;
  font-weight: medium;
  width: 75%;
  color: #717171;

  @media (max-width: 767px) {
    font-size: 0.95rem;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const HireMeButton = styled.a`
  background-color: #000;
  color: #fff;
  font-size: 1rem;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #ffed4a;
  }

  @media (max-width: 767px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

export const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  gap: 2px;
  border: 1px solid #000;
  background-color: #fff;
  padding: 7px;
  border-radius: 8px;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #ffed4a;
  }

  @media (max-width: 767px) {
    padding: 6px;
    font-size: 0.9rem;
  }
`;

export const ResumeButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;

  ul {
    display: flex;
    gap: 5px;
  }
`;

export const IconListItem = styled.li`
  a {
    display: block;
    text-decoration: none;
    color: inherit;
    height: 1.8rem;
    width: 1.8rem;
    font-size: 1.6rem;

    &:hover {
        transform: scale(1.25);
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 767px) {
    align-items: flex-end;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 88%;
  width: fit-content;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

export const MainImage = styled.img`
  height: 90%;
  width: 100%;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 95%;
    margin: auto;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 10%;
  right: 8%;
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  cursor: pointer;

  img {
    width: 135px;

    @media (min-width: 768px) {
        width: 90px;
    }
  }
`;

export const PlayIcon = styled(FaPlay)`
  color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;