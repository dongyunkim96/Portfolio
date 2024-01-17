import React from 'react';
import {
    AiFillTwitterCircle,
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
    return (
        <div id='home' className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
            <div className=' container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px] flex sm:flex-col-reverse sm:pt-0 '>
                <div className=' left mt-auto md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:py-2 sm:py-0'>
                    <div className='info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2'>
                        <h2
                          data-aos="fade-up"
                          className=' text-5x1 font-bold sm:text-[2rem]'
                        >
                            Hello, I'm Dongyun Kim
                        </h2>
                        <TypeAnimation
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
                          className='text-yellow-500 text-4x1 font-bold sm:text-3x1'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}