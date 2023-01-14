import { makeStyles, Theme } from "@material-ui/core/styles";
import { StyleClasses } from "../../../common/helper";
type ClassKey = "root" | "btnContainer" | "btnOfferta" | "btnKonfigure";

interface StyleProps {
  classes?: StyleClasses<ClassKey | string>;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    color: "white",
    position: "relative",
    zIndex: 20,
    border: "none",
    textAlign: "center",
    top: "40%",
    width: "1000px",
    margin: "auto",
  },
  btnContainer: {
    marginTop: "1rem",
  },
  btnOfferta: {
    marginRight: "2rem",
    padding: "0.6rem 2.6rem",
    borderRadius: "50px",
    backgroundColor: "#03a9f4",
    color: "white",
    "&:hover": {
      backgroundColor: "#6EC1E4",
    },
  },
  btnKonfigure: {
    borderRadius: "50px",
    border: "2px solid",
    "&:hover": {
      border: "2px solid lightgrey",
    },
  },
}));

export default useStyles;
