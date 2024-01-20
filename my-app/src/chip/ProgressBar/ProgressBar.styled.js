import styled from "styled-components";

export const Progress = styled.div`
  width: 0%;
  height: 8px;
  position: absolute;
  border-radius: 3x1;
  background-color: #ffd700;

  
    @keyframes progress-animation {
        from {
            width: 0%;
        }
        to {
            width: ${(props) => props.width};
        }
    }
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ProgressBarSpace = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProgressBarParagraph = styled.p`
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const ProgressBarDivider = styled.div`
  height: 8px;
  width: 100%;
  position: relative;
  border-radius: 3x1;
  background-color: #d3d3d3;
`;