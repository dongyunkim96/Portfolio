import React from "react";
import {
    ContactCardInput,
    ContactCardInputButton,
    ContactCardLeftSection,
    ContactCardLeftSectionButton,
    ContactCardLeftSectionContainer,
    ContactCardLeftSectionParagraph,
    ContactCardRightForm,
    ContactCardRightSection,
    ContactCardTextarea,
    ContactCardWrapper,
    ContactContainer,
    ContactHeader,
} from "./Contact.styled";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
    return (
        <ContactContainer id="Contact">
            <ContactHeader data-aos="fade-up">
                <h3>Contact</h3>
                <span></span>
            </ContactHeader>
            <ContactCardWrapper>
                <ContactCardLeftSection>
                    <ContactCardLeftSectionContainer>
                        <ContactCardLeftSectionParagraph data-aos="zoom-in">
                            <h1>You Need</h1>
                            <h3>Beautiful design for your website leave a request</h3>
                        </ContactCardLeftSectionParagraph>
                    </ContactCardLeftSectionContainer>
                    <ContactCardLeftSectionButton>
                        <button data-aos="zoom-in" className="rotate">
                            <BsArrowRight />
                        </button>
                    </ContactCardLeftSectionButton>
                </ContactCardLeftSection>
                <ContactCardRightSection>
                    <ContactCardRightForm action="mailto:dongyunkim96@gmail.com">
                        <ContactCardInput
                          type="text"
                          placeholder="e.g. example@email.com"
                          name="Email"
                        />
                        <ContactCardInput
                          type="text"
                          placeholder="e.g. John Doe"
                          name="name"
                        />
                        <ContactCardTextarea
                          row="10"
                          cols="50"
                          placeholder="Write your message"
                          name="message"
                          id=""
                        />
                        <ContactCardInputButton type="submit">
                            <span>Send</span>
                            <RiSendPlaneFill />
                        </ContactCardInputButton>
                    </ContactCardRightForm>
                </ContactCardRightSection>
            </ContactCardWrapper>
        </ContactContainer>
    );
};

export default Contact;