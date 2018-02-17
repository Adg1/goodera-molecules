import { createMuiTheme } from 'material-ui/styles';
import deepOrange from 'material-ui/colors/deepOrange';
import deepPurple from 'material-ui/colors/deepPurple';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';

export const themeObj = {
  palette: {
    primary: deepPurple,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  status: {
    danger: 'orange',
  },
};

export const theme = createMuiTheme(themeObj);