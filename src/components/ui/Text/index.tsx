import {
  ColorType,
  FontSizeType,
  FontWeightType,
  IColor,
  IFontFamily,
  IFontSize,
  IFontWeight,
} from "@/styles/theme";

import { TextContainer } from "./styles";
import { ReactNode } from "react";

export type AlignType = "center" | "start" | "end";

interface TextProps extends IColor, IFontSize, IFontWeight, IFontFamily {
  align?: AlignType;
  children: ReactNode;
  tag: string;
}

export function Text({
  children,
  color = "blue-900",
  size = "md",
  weight = "400",
  tag = "p",
  fontFamily = "primary",
  align = "start",
  ...rest
}: TextProps) {
  return (
    <TextContainer
      align={align}
      color={color}
      size={size}
      fontFamily={fontFamily}
      weight={weight}
      as={tag}
      {...rest}
    >
      {children}
    </TextContainer>
  );
}
