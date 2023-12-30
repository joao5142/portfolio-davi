import styled from "styled-components";

export const SkillContainer = styled.div`
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-bottom: 0.8rem;
  }
`;

export const SkillProgress = styled.div`
  border-radius: 1.25rem;
  max-width: 150px;
  width: 100%;
  height: 0.5rem;
  margin-bottom: 0.6rem;
  background: ${(props) => props.theme.colors["blue-200"]};
`;
interface SkillProgressInnerProps {
  progress: number;
}
export const SkillProgressInner = styled.div<SkillProgressInnerProps>`
  border-radius: 1.25rem;
  height: 0.5rem;

  width: ${(props) => props.progress}%;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors["blue-400"]} 0%,
    ${(props) => props.theme.colors["blue-500"]} 100%
  );
`;
