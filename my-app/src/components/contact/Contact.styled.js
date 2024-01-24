import styled from "styled-components";

export const ContactContainer = styled.div`
  margin: auto;
  margin-top: 16rem;
`;

export const ContactHeader = styled.div`
  margin-bottom: 2rem;
  position: relative;

  h3 {
    font-size: 3rem;
    font-weight: 700;
    color: #718096;
  }

  span {
    height: 1.1px;
    width: 92%;
    background-color: #cbd5e0;
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const ContactCardWrapper = styled.div`
  width: 90%;
  max-width: 100%;
  margin: auto;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

export const ContactCardLeftSection = styled.div`
  width: 70%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactCardLeftSectionContainer = styled.div`
  flex: 3;
  width: 50%;
  gap: 3;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
`;

export const ContactCardLeftSectionParagraph = styled.div`
  h1 {
    font-size: 5xl;
    font-weight: bold;
  }

  h3 {
    font-size: xl;
  }
`;

export const ContactCardLeftSectionButton = styled.div`
  display: flex;
  padding: 5;
  align-items: center;
  justify-content: center;

  button {
    font: 3xl;
    font-weight: 800;
    color: #ffd700;
    padding: 2;
    border-radius: lg;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);

    &.rotate {
      transform: rotate(90deg);
    }
  }
`;

export const ContactCardRightSection = styled.div`
  flex: 1;
`;

export const ContactCardRightForm = styled.form`
  flex: 1;
  flex-direction: column;
  gap: 5;
  width: 70%;
  margin: auto;
`;

export const ContactCardInput = styled.input`
  padding: 2px 3px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
`;

export const ContactCardTextarea = styled.textarea`
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px;
  width: 100%;
`;

export const ContactCardInputButton = styled.button`
  background-color: #FFD700;
  color: white;
  font-weight: bold;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;