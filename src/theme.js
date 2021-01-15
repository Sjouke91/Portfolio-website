import { createMuiTheme } from "@material-ui/core";
import { blueGrey, amber } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: { main: amber[500], contrastText: blueGrey[800] },
  },
  typography: {
    fontFamily: "roboto",
  },
});

export default theme;
