import React from "react";
import {
    FooterContainer,
    FooterBox,
    FooterHeading,
    FooterIcons,
    FooterLinks,
    TelegramIcon,
    WhatsAppIcon,
    InstagramIcon,
} from "./Footer.styled"

const Footer = () => {
    return (
        <FooterContainer id="works">
            <FooterBox>
                <FooterHeading
                  data-aos="zoom-out"
                >
                    Let's Talk
                </FooterHeading>
                <FooterIcons>
                    <FooterLinks 
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      href="telegram page here"
                    >
                        <TelegramIcon />
                        <p>Telegram</p>
                    </FooterLinks>
                    <FooterLinks 
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      href="whatsapp page here"
                    >
                        <WhatsAppIcon />
                        <p>WhatsApp</p>
                    </FooterLinks>
                    <FooterLinks 
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      href="instagram page here"
                    >
                        <InstagramIcon />
                        <p>Instagram</p>
                    </FooterLinks>
                    </FooterIcons>
                    <div className="sm:text-[12px]">
                        | Copyright &copy; <span>2024 Dev AlphaSpace </span> All rights reserved |
                    </div>
            </FooterBox>
        </FooterContainer>
    );
};

export default Footer;