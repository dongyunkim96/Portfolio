import styled from "styled-components";

export const WorkContainer = styled.div`
  margin: 16px auto;
`;

export const WorkSection = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 3rem;
    font-weight: 900;
    color: #718096;
    margin-bottom: 0.5rem;
  }

  span {
    height: 1.1px;
    right: 0;
    position: absolute;
    width: 92%;
    background-color: #cbd5e0;
    display: block;
  }
`;

export const WorkDetail = styled.div`
  flex: 1;
  width: 100%;
`;

export const WorkDescription = styled.p`
  color: #4a5568;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const WorkCardWrapper = styled.div`
  margin: 2.5rem auto;
  width: 90%;
  max-width: fit-content;
`;

export const WorkBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  width: 100%;
`;