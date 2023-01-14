import { Box } from "@material-ui/core";

// styles
import useStyles from "./styles/HomePageStyle";
import MainContentHomePage from "./MainContentHomePage";
import Navbar from "./Navbar";

function HomePage() {
  const classes = useStyles({});
  return (
    <Box className={classes.root}>
      <Box className={classes.colorOverlay} />
      <Navbar />
      <MainContentHomePage />
    </Box>
  );
}

export default HomePage;
