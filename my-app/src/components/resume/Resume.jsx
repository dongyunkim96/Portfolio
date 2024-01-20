import React from "react";
import { 
    ResumeContainer,
    ResumeBox,
    ResumeTitle,
    ResumeSubTitle1,
    ResumeSubTitle2,
    ResumeDescription,
    ResumeCardWrapper,
    ResumeCard,
    ResumeFieldset,
    ResumeLegend,
    ResumeRelative,
    ResumeCardDetail,
    ResumeCardHeader,
    ResumeCompany,
    ResumeDate,
    ResumeParagraph,
    DesignWrapper,
    DesignCircle,
    DesignLine,
 } from "./Resume.styled";

const Resume = () => {
    return (
        <ResumeContainer id="resume">
            <ResumeBox>
                <ResumeTitle>Resume</ResumeTitle>
                <ResumeSubTitle1></ResumeSubTitle1>
            </ResumeBox>
            <ResumeSubTitle2 data-aos="fade-up">
                <ResumeDescription>Here are my experiences and qualifications.</ResumeDescription>
            </ResumeSubTitle2>
            <ResumeCardWrapper>
                <ResumeCard>
                    <ResumeFieldset data-aos="zoom-in">
                        <ResumeLegend>Experience</ResumeLegend>
                        <ResumeRelative>
                            <DesignWrapper>
                                <DesignCircle className="c1"></DesignCircle>
                                <DesignLine className="line"></DesignLine>
                                <DesignCircle className="c2"></DesignCircle>
                            </DesignWrapper>
                            <ResumeCardDetail>
                                <ResumeCardHeader>Software Developer</ResumeCardHeader>
                                <ResumeCompany>Company Name</ResumeCompany>
                                <ResumeDate>2023.06.24 ~ 2024.01.01</ResumeDate>
                                <ResumeParagraph>Those are my experiences...</ResumeParagraph>
                        </ResumeCardDetail>
                        </ResumeRelative>
                    </ResumeFieldset>
                </ResumeCard>
                <ResumeCard>
                    <ResumeFieldset data-aos="zoom-in">
                        <ResumeLegend>Experience</ResumeLegend>
                        <ResumeRelative>
                            <DesignWrapper>
                                <DesignCircle className="c1"></DesignCircle>
                                <DesignLine className="line"></DesignLine>
                                <DesignCircle className="c2"></DesignCircle>
                            </DesignWrapper>
                            <ResumeCardDetail>
                                <ResumeCardHeader>Software Developer</ResumeCardHeader>
                                <ResumeCompany>Company Name</ResumeCompany>
                                <ResumeDate>2023.06.24 ~ 2024.01.01</ResumeDate>
                                <ResumeParagraph>Those are my experiences...</ResumeParagraph>
                        </ResumeCardDetail>
                        </ResumeRelative>
                    </ResumeFieldset>
                </ResumeCard>
            </ResumeCardWrapper>
        </ResumeContainer>
    );
};

export default Resume;