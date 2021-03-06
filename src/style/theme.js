import { createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

export default createMuiTheme({
  palette: {
    primary: {
      main: '#0d47a1',
    },
    secondary: blue,
  },
});

export const classes = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
};

export const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});