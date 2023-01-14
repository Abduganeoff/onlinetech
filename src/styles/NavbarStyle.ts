import { makeStyles, Theme } from "@material-ui/core/styles";
import { StyleClasses } from "../common/helper";
type ClassKey = "root";
interface StyleProps {
  classes?: StyleClasses<ClassKey | string>;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    borderBottom: "solid 1px white",
    height: theme.spacing(12),
    zIndex: 10,
    color: "white",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderTitle: {
    fontSize: theme.spacing(5),
    letterSpacing: "1rem",
    verticalAlign: "center",
    textTransform: "uppercase",
    marginLeft: "4rem",
  },
  artText: {
    fontWeight: 900,
  },
  navItems: {
    textTransform: "uppercase",
    display: "flex",
    width: "50%",
    marginRight: "4rem",
  },
  navItem: {
    width: "50%",
  },
  ListItemText: {
    fontWeight: 600,
    fontSize: "0.9rem",
  },
}));

export default useStyles;
