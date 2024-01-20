import React from "react";
import ProgressBar from "../../chip/ProgressBar/ProgressBar";
import SkillBox from "../../chip/SkillBox/SkillBox";
import { 
    ProgressColumnContainer,
    RightSkillsItem,
    RightSkillsParagraph1,
    RightSkillsParagraph2,
    SkillBoxing,
    SkillContainer,
    SkillHeader,
    SkillWord,
    SkillsItem,
    SkillsParagraph,
    SkillsProgressContainer,
    SkillsSection,
 } from "./Skills.styled";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiStyledcomponents } from "react-icons/si"

const Skills = ({ darkMode }) => {
    return (
        <SkillContainer id="Skills">
            <SkillBoxing data-aos="fade-up">
                <SkillHeader>My Skills</SkillHeader>
                <SkillWord></SkillWord>
            </SkillBoxing>
            <SkillsSection>
                <SkillsItem>
                    <SkillsParagraph data-aos="fade-up">Here are my skills.</SkillsParagraph>
                    <SkillsProgressContainer>
                        <ProgressColumnContainer>
                            <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                            <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={88} />
                            <ProgressBar logo={<SiJavascript />} name={"JAVASCRIPT"} value={85} />
                            <ProgressBar logo={<FaReact />} name={"REACT"} value={85} />
                            <ProgressBar logo={<SiStyledcomponents />} name={"STYLED-COMPONENTS"} value={90} />
                        </ProgressColumnContainer>
                    </SkillsProgressContainer>
                </SkillsItem>
                <RightSkillsItem>
                    <RightSkillsParagraph1>
                        <SkillBox logo={<IoLogoHtml5 />} black={"white"} white={"black"} skill={"HTML"} />
                        <SkillBox logo={<IoLogoCss3 />} black={"white"} white={"black"} skill={"CSS"} />
                    </RightSkillsParagraph1>
                    <RightSkillsParagraph2>
                        <SkillBox logo={<SiJavascript />} black={"black"} white={"white"} skill={"JAVASCRIPT"} />
                        <SkillBox logo={<FaReact />} black={"black"} white={"white"} skill={"REACT"} />
                    </RightSkillsParagraph2>
                </RightSkillsItem>
            </SkillsSection>
        </SkillContainer>        
    );
};

export default Skills;