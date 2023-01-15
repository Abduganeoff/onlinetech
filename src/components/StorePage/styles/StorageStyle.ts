import { makeStyles, Theme } from "@material-ui/core/styles";
import { StyleClasses } from "../../../common/helper";
type ClassKey = "root";
interface StyleProps {
  classes?: StyleClasses<ClassKey | string>;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
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
    color: "#5D7C89",
    left: 30,
    top: 40,
    "&:hover": {
      backgroundColor: "lightgrey",
    },
  },
  footer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerBtn: {
    background: "#03a9f4",
    color: "white",
    width: "12rem",
    height: "3.5rem",
    borderRadius: "50px",
    marginRight: "3rem",
    "&:hover": {
      background: "#03a9f4",
    },
  },
}));

export default useStyles;
