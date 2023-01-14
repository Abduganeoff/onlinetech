import { Box } from "@material-ui/core";
import Navbar from "./Navbar";
// styles
import useStyles from "../styles/HomePageStyle";

function HomePage() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.colorOverlay} />
      <Navbar />
    </Box>
  );
}

export default HomePage;
