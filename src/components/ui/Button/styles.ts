import styled, { css } from "styled-components";
import { ButtonVariantTypes } from ".";

interface ButtonProps {
  variant: ButtonVariantTypes;
}

function getButtonStyle(variant: ButtonVariantTypes) {
  if (variant == "primary") {
    return css`
      background: linear-gradient(90deg, #c2fbe6 0%, #4eedb1 100%);
    `;
  } else if (variant == "secondary") {
    return css`
      background: rgba(255, 255, 255, 0.2);
      padding: 1.25rem;

      display: flex;
      align-items: center;
      justify-content: center;
    `;
  } else if (variant == "tertiary") {
    return css`
      background: #dce3fb;
      padding: 1.25rem;

      display: flex;
      align-items: center;
      justify-content: center;
    `;
  }
}

export const ButtonContainer = styled.button<ButtonProps>`
  border: 0;
  outline: 0;
  padding: 1rem 2rem 1rem 2rem;

  border-radius: 0.75rem;

  cursor: pointer;

  ${(props) => props.variant && getButtonStyle(props.variant)}

  &:active {
    transform: scale(0.98);
  }
`;
