import { makeStyles, Theme } from "@material-ui/core/styles";
import { StyleClasses } from "../common/helper";
type ClassKey = "root" | "colorOverlay";
interface StyleProps {
  classes?: StyleClasses<ClassKey | string>;
}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage:
      "url(https://artrel.pl/wp-content/uploads/2022/02/joker-scaled.jpg)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  colorOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.4)",
    pointerEvents: "none",
    zIndex: 2,
  },
}));

export default useStyles;
