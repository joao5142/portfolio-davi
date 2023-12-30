import styled from "styled-components";

export const CardHabilityContainer = styled.div`
  background: ${(props) => props.theme.colors.white};

  box-shadow: 3px 20px 20px 0px rgba(0, 0, 0, 0.03);
  border-radius: 1rem;
  border-bottom: 3px solid ${(props) => props.theme.colors["blue-500"]};

  padding: 2.8rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
