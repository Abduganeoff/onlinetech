import { makeStyles, Theme } from "@material-ui/core/styles";
import { StyleClasses } from "../../../common/helper";
type ClassKey = "root";
interface StyleProps {
  classes?: StyleClasses<ClassKey | string>;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: { flexGrow: 1, padding: "0 5rem" },
  tabContentContainer: {
    padding: "0 6rem",
  },
  navBar: {
    backgroundColor: "#03a9f4",
    "& > *": {
      color: "white",
      fontWeight: 600,
    },
  },
  headerTitle: {
    letterSpacing: "1rem",
    textTransform: "uppercase",
    "& > span": {
      fontWeight: 900,
    },
  },

  btnBack: {
    position: "absolute",
    left: 30,
    top: 40,
    "&:hover": {
      backgroundColor: "lightgrey",
    },
  },
}));

export default useStyles;
