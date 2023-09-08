import { ReactNode } from "react";
import { ButtonContainer } from "./styles";
import { ButtonHTMLAttributes } from "react";

export type ButtonVariantTypes = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: ButtonVariantTypes;
}

export function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  );
}
