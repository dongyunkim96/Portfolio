import React from "react"
import WorkCard from "../../chip/WorkCard/WorkCard";
import { 
    WorkContainer,
    WorkSection,
    WorkDetail,
    WorkDescription,
    WorkCardWrapper,
    WorkBox,

 } from "./Work.styled";

const Work = () => {
    return (
        <WorkContainer>
            <WorkSection data-aos="fade-up">
                <h3>Works</h3>
                <span></span>
            </WorkSection>
            <WorkDetail>
                <WorkDescription>Here are some of my works.</WorkDescription>
            </WorkDetail>
            <WorkCardWrapper>
                <WorkBox>
                    <WorkCard />
                </WorkBox>
            </WorkCardWrapper>
        </WorkContainer>

    );
};

export default Work;