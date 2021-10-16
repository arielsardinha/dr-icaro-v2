import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      light: "#1a1a1a7a",
      main: "#1a1a1a",
      dark: "#0d0d0d",
    },
    secondary: {
      light: "#e6e6e67a",
      main: "#e6e6e6",
      dark: "#737373",
    },
    text: {
      primary: "#fff",
      secondary: "#f7c593",
    },
    grey: {
      50: "#fafafa",
      100: "#f0f0f0",
      200: "#d7d9dd",
      300: "#c4c4c4",
      400: "#9b9b9b",
    },
  },
  breakpoints: {
    values: {
      xs: 460, // ? cell pequeno
      sm: 650, // ? cell grande
      md: 960, // ? tablet
      lg: 1280, // ? pc normal
      xl: 1536, // ? pc grande
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, san-serif",
  },
});

export default theme;
