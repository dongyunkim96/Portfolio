import styled from "styled-components";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export const FooterContainer = styled.div`
  margin: auto;
  height: 300px;
  margin-top: 16px;
`;

export const FooterBox = styled.div`
  background-color: #ffd700;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const FooterHeading = styled.h2`
  font-weight: bold;
  font-size: 5x1;
`;

export const FooterIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const FooterLinks = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  color: white;
  font-weight: medium;
`;

export const TelegramIcon = styled(FaTelegramPlane)`
  color: black;
  font-size: 3x1;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.25);
    cursor: pointer;
  }
`;

export const WhatsAppIcon = styled(IoLogoWhatsapp)`
  color: black;
  font-size: 3x1;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.25);
    cursor: pointer;
  }
`;

export const InstagramIcon = styled(RiInstagramFill)`
  color: black;
  font-size: 3x1;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.25);
    cursor: pointer;
  }
`;