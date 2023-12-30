export const defaultTheme = {
  colors: {
    "blue-100": "#F7F9FD",
    "blue-200": "#E5F3FF",
    "blue-400": "#A3CEFF",
    "blue-500": "#64ADFF",
    "blue-700": "#2A85EB",
    "blue-900": "#002F70",
    "yellow-400": "#ED8936",
    white: "#ffff",

    gray: "#40404b",

    "gray-200": "#718096",

    black: "#171923",
  },
  fontSizes: {
    sm: "1rem",
    md: "1.3rem",
    lg: "1.875rem",
    lg2: "2.125rem",
    xl: "3rem",
    xxl: "4rem",
  },
  fontFamily: {
    primary: "Sora",
    secondary: "Montserrat",
  },
};

export type ColorType = keyof typeof defaultTheme.colors;

export interface IColor {
  color?: ColorType;
}

export type FontSizeType = keyof typeof defaultTheme.fontSizes;

export interface IFontSize {
  size?: FontSizeType;
}
export type FontWeightType = "400" | "500" | "600" | "700";

export interface IFontWeight {
  weight?: FontWeightType;
}

export type FontFamilyType = keyof typeof defaultTheme.fontFamily;

export interface IFontFamily {
  fontFamily?: FontFamilyType;
}
