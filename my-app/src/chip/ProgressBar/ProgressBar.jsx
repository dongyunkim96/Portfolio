import React from "react";
import {
    Progress,
    ProgressContainer,
    ProgressBarSpace,
    ProgressBarParagraph,
    ProgressBarDivider,
} from "./ProgressBar.styled";

const ProgressBar = ({ logo, name, value, duration = 3 }) => {
    return (
        <ProgressContainer>
            <ProgressBarSpace>
                <ProgressBarParagraph>
                    {logo} {name}
                </ProgressBarParagraph>
            </ProgressBarSpace>
            <ProgressBarDivider>
                <Progress
                  style={{
                    width: `${value}%`,
                    animation: `progress-animation ${duration}s linear`,
                  }}
                ></Progress>
            </ProgressBarDivider>
        </ProgressContainer>
    );
};

export default ProgressBar;
