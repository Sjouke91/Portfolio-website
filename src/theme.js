import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00897b",
    },
    secondary: {
      main: "#ffc107",
    },
  },

  typography: {
    fontFamily: "roboto",
  },
});

export default theme;
