import { makeStyles, Theme } from "@material-ui/core/styles";
import { StyleClasses } from "../../../../common/helper";
type ClassKey = "root";
interface StyleProps {
  classes?: StyleClasses<ClassKey | string>;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  processorCard: {
    padding: "3rem 0",
    width: "15rem",
    height: "13rem",
  },
  processorCardTitle: {
    fontWeight: 600,
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > img": {
      width: "10rem",
    },
  },
}));

export default useStyles;
