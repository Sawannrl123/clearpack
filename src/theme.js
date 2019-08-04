import { createMuiTheme } from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import lightBlue from "@material-ui/core/colors/lightBlue";
import yellow from "@material-ui/core/colors/yellow";

export const theme = createMuiTheme({
  customColor: {
    red: {
      main: red[500],
      light: red[300],
      dark: red[700]
    },
    green: {
      main: green[500],
      light: green[300],
      dark: green[700]
    },
    yellow: {
      main: yellow[500],
      light: yellow[300],
      dark: yellow[700]
    },
    lightBlue: {
      main: lightBlue[500],
      light: lightBlue[300],
      dark: lightBlue[700]
    }
  }
});
