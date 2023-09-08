import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 1rem;
    }

    body {
        background-color: ${(props) => props.theme.colors["blue-100"]};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        font-family: 'Sora', sans-serif;

    }
    html{
        @media (max-width: 700px) {
            &{font-size:0.9rem}
        }

        @media (max-width: 500px) {
            &{font-size:0.8rem}
        }
    }
`;

export const ButtonContainer = styled.button`
  border-radius: 10rem;
  padding: 1rem 1.5rem;

  border: 0;
  outline: 0;
`;
