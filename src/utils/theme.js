import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5a5f",
      contrastText: "#fff",
      gradient:
        "linear-gradient(90deg, rgba(255,90,95,1) 40%, rgba(138,206,81,1) 100%)",
    },
    secondary: {
      main: "#8ace51",
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
