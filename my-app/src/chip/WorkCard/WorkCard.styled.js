import styled from "styled-components";
import { Link } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";

export const POPUP = styled.div`
    position: relative;
    img {
        &:hover {
            transform: scaleX(2);
        }
    }
    .popup {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        margin: auto;
        transition: .5s ease;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .icon {
        color: #fff !important;
    }
    &:hover .popup {
        opacity: 1;
        color: #fff;
    }
`;

export const WorkCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const WorkCardHoverItem = styled.div`
  height: 280px;
  width: 380px;
  cursor: pointer;
  transition: transform 0.5s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  overflow: hidden;

  &:hover {
    transform: scale(1.25);
  }
`;

export const WorkCardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.25);
  }
`;

export const WorkCardPopup = styled.div`
  width: 100%;
  height: 280px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  overflow: hidden;
  padding: 1rem;
`;

export const WorkCardParagraph = styled.p`
  color: #333;
  font-size: 1rem;
  line-height: 1.4;
  text-align: justify;
  width: 90%;
`;

export const WorkCardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const WorkCardLink = styled(Link)`
  display: inline-block;
  margin-top: 0.75rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

export const WorkCardBreak = styled.br`
  width: 2px;
  height: 0;
  background-color: white;
`;

export const WorkCardExternalLink = styled(RxExternalLink)`
  color: black;
  background-color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding: 2px;
`;

export const WorkCardGithubLink = styled(AiOutlineGithub)`
  color: black;
  background-color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding: 2px;
`;

export const WorkCardText = styled.p`
  color: black;
`;

export const WorkCardTitle = styled.p`
  color: #333;
  font-size: 1.25rem;
  font-weight: 500;
`;