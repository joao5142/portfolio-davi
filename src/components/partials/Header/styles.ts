import { List, X } from "phosphor-react";
import styled from "styled-components";

export const ListIcon = styled(List)`
  cursor: pointer;
`;

export const CloseIcon = styled(X)`
  cursor: pointer;
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

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1300px;
  margin: 0 auto;
  height: 6.25rem;

  padding: 0 1.5rem;

  ${ListIcon} {
    display: none;
  }
  ${CloseIcon} {
    display: none;
  }

  @media (max-width: 1000px) {
    ${CloseIcon} {
      display: block;
      align-self: flex-end;
      justify-self: flex-end;
    }

    ${ListIcon} {
      display: block;
    }

    ${HeaderNavList} {
      position: fixed;
      inset: 0;
      background: white;

      grid-auto-flow: row;
      align-items: center;
      justify-content: center;

      display: none;

      &.show {
        display: grid;
      }
    }
    a {
      font-size: 1.3rem;
      text-align: center;
    }
  }
`;
export const HeaderContainer = styled.header`
  background: #fff;
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.03);

  position: sticky;
  top: 0;
  left: 0;
`;

export const HeaderNameText = styled.span`
  background: linear-gradient(270deg, #a3ceff 0%, #64adff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 700;
`;
