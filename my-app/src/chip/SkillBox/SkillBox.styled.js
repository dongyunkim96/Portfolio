import styled from "styled-components";

export const SkillBoxContainer = styled.div`
  width: 11rem;
  height: 11rem;
  border-radius: 1.5rem;
  background-color: ${(props) => props.black};
  color: ${(props) => props.white};
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 1px;
`;

export const SkillBoxCircle = styled.div`
  background-color: ${(props) => props.white};
  color: ${(props) => props.black};
  width: 7rem;
  height: 7rem;
  padding: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
`;

export const SkillBoxParagraph = styled.p`
  font-weight: 600;
  font-size: 0.875rem;
`;