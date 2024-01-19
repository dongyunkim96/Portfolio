import React from 'react';
import {
    Container,
    Content,
    Information,
    LeftContent,
    Title,
    AnimatedText,
    GrayParagraph,
    ButtonContainer,
    HireMeButton,
    DownloadButton,
    ResumeButton,
    IconListItem,
    IconsContainer,
    RightContainer,
    ImageContainer,
    MainImage,
    ImageOverlay,
    ThumbnailContainer,
    PlayIcon,
} from "./Header.styled.js";
import {
    AiFillTwitterCircle,
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
    return (
        <Container id='home'>
            <Content>
                <LeftContent>
                    <Information>
                        <Title data-aos="fade-up">
                            Hello, I'm Dongyun Kim
                        </Title>
                        <AnimatedText
                          data-aos="fade-up"
                          sequence={[
                            "Front-End Developer",
                            2000,
                            "Student",
                            2000,
                            "",
                          ]}
                          speed={30}
                          wrapper='h2'
                          repeat={Infinity}
                        />
                        <GrayParagraph>
                            This is section 1
                        </GrayParagraph>
                    </Information>
                    <ButtonContainer data-aos="fade-up">
                        <HireMeButton href=" ">
                            <span>Hire Me</span>
                        </HireMeButton>
                        <DownloadButton href="" download>
                            <ResumeButton>
                                Resume <FiDownload />
                            </ResumeButton>
                        </DownloadButton>
                    </ButtonContainer>
                    <IconsContainer>
                        <ul
                          data-aos="fade-up"
                          data-aos-duration="1500"
                        >
                            <IconListItem>
                                <a href=' '>
                                    <AiFillGithub />
                                </a>
                            </IconListItem>
                            <IconListItem>
                                <a href=' '>
                                    <FaLinkedin />
                                </a>
                            </IconListItem>
                            <IconListItem>
                                <a href=' '>
                                    <AiFillInstagram />
                                </a>
                            </IconListItem>
                            <IconListItem>
                                <a href=' '>
                                    <FaFacebook />
                                </a>
                            </IconListItem>
                            <IconListItem>
                                <a href=' '>
                                    <AiFillTwitterCircle />
                                </a>
                            </IconListItem>
                        </ul>
                    </IconsContainer>
                </LeftContent>
                <RightContainer>
                    <ImageContainer>
                        <MainImage
                          data-aos="fade-up"
                          src={" "}
                          alt='my photo'
                        />
                        <ImageOverlay>
                            <ThumbnailContainer data-aos="zoom-in" data-aos-duration="1000">
                                <img
                                  src='Front-end developer image here'
                                  alt=' '
                                />
                                <PlayIcon />
                            </ThumbnailContainer>
                        </ImageOverlay>
                    </ImageContainer>
                </RightContainer>
            </Content>
        </Container>
    );
};

export default Header;