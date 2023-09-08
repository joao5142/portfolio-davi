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
  width: 100%;
  height: 0.5rem;
  background: ${(props) => props.theme.colors["blue-200"]};
`;
export const SkillProgressInner = styled.div`
  border-radius: 1.25rem;
  height: 0.5rem;

  width: 70%;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors["blue-400"]} 0%,
    ${(props) => props.theme.colors["blue-500"]} 100%
  );
`;
