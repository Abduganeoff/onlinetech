import { makeStyles, Theme } from "@material-ui/core/styles";
import { StyleClasses } from "../../../common/helper";
type ClassKey = "root";
interface StyleProps {
  classes?: StyleClasses<ClassKey | string>;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: { flexGrow: 1, padding: "0 5rem" },

  tabContent: {
    padding: "3rem 2rem",
  },
  processorCardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
  tabContentHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
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
