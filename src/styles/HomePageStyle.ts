import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundImage:
      "url(https://artrel.pl/wp-content/uploads/2022/02/joker-scaled.jpg)",
    paddingTop: "82.5859px",
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
  },
});

export default useStyles;
