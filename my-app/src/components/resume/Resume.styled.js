import styled from "styled-components";

export const ResumeContainer = styled.div`
  margin-top: 15px;
  width: 100%;
`;

export const ResumeBox = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

export const ResumeTitle = styled.div`
  font-size: 3rem;
  font-weight: 900;
  color: #718096;
`;

export const ResumeSubTitle1 = styled.span`
  height: 1.1px;
  right: 0;
  position: absolute;
  width: 92%;
  background-color: #cbd5e0;
  display: block;
`;

export const ResumeSubTitle2 = styled.div`
  flex: 1;
  width: 100%;
`;

export const ResumeDescription = styled.p`
  color: #4a5568;
  font-size: 1.1rem;
  font-weight: 500;
  width: 100%;
`;

export const ResumeCardWrapper = styled.div`
  width: 90%;
  max-width: 100%;
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

export const ResumeCard = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResumeFieldset = styled.fieldset`
  width: 80%;
  padding: 1.25rem;
  padding-top: 3rem;
`;

export const ResumeLegend = styled.legend`
  width: auto;
  margin-left: 50%;
  transform: translateX(-50%);
  border: 2px solid #e2e8f0;
  border-radius: 1.5rem;
  padding: 0.5rem 2rem;
  font-weight: 600;
  font-size: 1.5rem;
  color: #f6e05e;
`;

export const ResumeRelative = styled.div`
  position: relative;
`;

export const ResumeCardDetail = styled.div`
  display: flex;
  position: absolute;
  left: 10px;
  top: 50%;
`;

export const ResumeCardHeader = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const ResumeCompany = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #718096;
`;

export const ResumeDate = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #f6e05e;
`;

export const ResumeParagraph = styled.p`
  font-size: 0.9rem;
  text-align: justify;
  word-break: break-word;
  color: #718096;
`;

export const DesignWrapper = styled.div`
  position: absolute;
  left: -160px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  display: flex;
  align-items: center;
`;

export const DesignCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #f6e05e;
`;

export const DesignLine = styled.div`
  width: 230px;
  height: 2px;
  background-color: #cbd5e0;
`;