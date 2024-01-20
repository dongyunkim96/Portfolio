import React from "react";
import { data } from "../../data/data";
import {
    POPUP,
    WorkCardContainer,
    WorkCardHoverItem,
    WorkCardImage,
    WorkCardParagraph,
    WorkCardPopup,
    WorkCardSection,
    WorkCardLink,
    WorkCardBreak,
    WorkCardExternalLink,
    WorkCardGithubLink,
    WorkCardText,
    WorkCardTitle,

} from "./WorkCard.styled";

const WorkCard = () => {
    const reversedData = [...data].reverse();

    return (
        <>
        {reversedData.map((data) => {
            return (
                <WorkCardContainer 
                  data-aos="zoom-in"
                  key={data.id}
                >
                    <POPUP>
                        <WorkCardHoverItem>
                            <WorkCardImage
                              src={data.img}
                              alt={data.title}
                            />
                        </WorkCardHoverItem>
                        <WorkCardPopup className={`popup`}
                        >
                            <WorkCardParagraph>
                                {data.desc}
                            </WorkCardParagraph>
                            <WorkCardSection>
                                <WorkCardLink
                                  to={data.link}
                                  target="_blank"
                                >
                                    <WorkCardExternalLink />
                                    <WorkCardText>Demo</WorkCardText>
                                </WorkCardLink>
                                <WorkCardBreak />
                                <WorkCardLink
                                  to={data.git}
                                  target="_blank"
                                >
                                    <WorkCardGithubLink />
                                    <WorkCardText>Code</WorkCardText>
                                </WorkCardLink>
                            </WorkCardSection>
                        </WorkCardPopup>
                    </POPUP>
                    <WorkCardTitle>
                        {data.title}
                    </WorkCardTitle>
                </WorkCardContainer>
            );
        })}
        </>
    );
};

export default WorkCard;