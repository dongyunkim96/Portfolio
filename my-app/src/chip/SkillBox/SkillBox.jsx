import React from "react";
import { 
  SkillBoxCircle,
  SkillBoxContainer,
  SkillBoxParagraph,
 } from "./SkillBox.styled";

const SkillBox = ({ logo, black, white, skill }) => {
    return (
        <SkillBoxContainer 
          data-aos="zoom-in"
          data-aos-duration="1000"
          black={black}
          white={white}
        >
            <SkillBoxCircle
              white={white}
              black={black}
            >
                {logo}
            </SkillBoxCircle>
            <SkillBoxParagraph>{skill}</SkillBoxParagraph>
        </SkillBoxContainer>
    );
};

export default SkillBox;