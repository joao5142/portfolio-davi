import { IColor, IFontFamily, IFontSize, IFontWeight } from "@/styles/theme";

import styled, { css } from "styled-components";

import { AlignType } from "./";

interface TextContainerAlignProp {
  align: AlignType;
}
interface TextContainerProps
  extends IColor,
    IFontSize,
    TextContainerAlignProp,
    IFontWeight,
    IFontFamily {}

export const TextContainer = styled.p<TextContainerProps>`
  ${({ size, color, theme, weight, fontFamily }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.fontSizes[size!]};
    font-weight: ${weight};
    font-family: ${theme.fontFamily[fontFamily!]}, sans-serif;
  `};

  ${({ align }) =>
    align == "center" &&
    css`
      text-align: center;
    `}

  ${({ align }) =>
    align == "end" &&
    css`
      text-align: right;
    `}
`;
