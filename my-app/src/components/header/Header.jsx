import React from 'react';
import {
    Container,
    Content,
    Information,
    LeftContent,
    Title,
    AnimatedText,
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
                        <p className=' text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]'>
                            This is section 1
                        </p>
                    </Information>
                    <div data-aos="fade-up" className='buttons flex gap-5'>
                        <a 
                          href=" "
                          className='bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold hover:text-yellow-500'
                        >
                            <span>Hire Me</span>
                        </a>
                        <a
                          href=" "
                          className='flex items-center gap-2 border-text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold hover:text-yellow-500'
                          download
                        >
                            <div className='flex items-center gap-1'>
                                Resume <FiDownload />
                            </div>
                        </a>
                    </div>
                    <div className='icons flex mt-5'>
                        <ul
                          data-aos="fade-up"
                          data-aos-duration="1500"
                          className='flex gap-5'
                        >
                            <li>
                                <a href=' '>
                                    <AiFillGithub className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                                </a>
                            </li>
                            <li>
                                <a href=' '>
                                    <FaLinkedin className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                                </a>
                            </li>
                            <li>
                                <a href=' '>
                                    <AiFillInstagram className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                                </a>
                            </li>
                            <li>
                                <a href=' '>
                                    <FaFacebook className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                                </a>
                            </li>
                            <li>
                                <a href=' '>
                                    <AiFillTwitterCircle className="h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </LeftContent>
                <div className='right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end'>
                    <div className='relative h-[88%] w-fit flex items-center sm:items-end'>
                        <img 
                          data-aos="fade-up"
                          className='h-[90%] w-full object-cover md:h-[95%] md:m-auto sm:m-0'
                          src={" "}
                          alt='my photo'
                        />
                        <div className='absolute bottom-10 md:bottom-3 right-8 md:right-2'>
                            <div data-aos="zoom-in" data-aos-duration="1000" className='relative cursor-pointer'>
                                <img
                                  className='w-[135px] md:w-[90px] circle-text'
                                  src='Front-end developer image here'
                                  alt='Front-end-image'
                                />
                                <FaPlay
                                  className='text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Container>
    );
};

export default Header;