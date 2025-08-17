// theme.ts
export const lightTheme = {
  dark: false,
  colors: {
    primary: "#342D25",
    background: "rgb(242, 242, 242)",
    card: "#F28705",
    text: "rgb(255,255,255)",
    border: "rgb(255,255,255)",
    notification: "#EBAE2D",
    button: "#0B99DE",
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    primary: "#EBAE2D",
    background: "#121212",
    card: "#333333",
    text: "#FFFFFF",
    border: "#FFFFFF",
    notification: "#EBAE2D",
    button: "#FF5733",
    link: "#66CCFF",
  },
};

export type ThemeType = typeof lightTheme;
