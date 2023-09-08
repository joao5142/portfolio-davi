import styled from "styled-components";

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1300px;
  margin: 0 auto;
  height: 6.25rem;

  padding: 0 1.5rem;
`;
export const HeaderContainer = styled.header`
  background: #fff;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.03);
`;

export const HeaderNameText = styled.span`
  background: linear-gradient(270deg, #a3ceff 0%, #64adff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 700;
`;

export const HeaderNavList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
  align-items: center;

  list-style-type: none;

  li a {
    color: ${(props) => props.theme.colors["blue-900"]};
    cursor: pointer;

    text-decoration: none;
  }
`;
