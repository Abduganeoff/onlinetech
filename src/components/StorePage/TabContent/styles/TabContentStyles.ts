import { makeStyles, Theme } from "@material-ui/core/styles";
import { StyleClasses } from "../../../../common/helper";
type ClassKey = "root";
interface StyleProps {
  classes?: StyleClasses<ClassKey | string>;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  processorCardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginLeft: "3rem",
  },
  processorCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "22%",
    height: "21rem",
  },
  tabContent: {
    padding: "3rem 2rem",
  },
  tabContentHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  processorCardTitle: {
    fontWeight: 600,
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 0",
    "& > img": {
      width: "10rem",
    },
  },
  checkbox: {
    color: "lightgrey !important",
    "& > span": {
      "& > svg": {
        fontSize: "40px !important",
      },
    },
    "&.Mui-checked": {
      "& > span": {
        "& > svg": {
          color: "#03a9f4 !important",
          fontSize: "45px",
        },
      },
    },
  },
}));

export default useStyles;
