import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles/MainContentHomePageStyle";

function MainContentHomePage() {
  const classes = useStyles({});
  return (
    <Box className={classes.root}>
      <Typography gutterBottom variant="h2">
        Sztuka niezawodności
      </Typography>
      <Typography gutterBottom variant="h6">
        Zajmujemy się produkcją komputerów PC dla graczy, biur projektowych oraz
        na indywidualne zamówienie klienta. Poznaj naszą ofertę.
      </Typography>
      <Box className={classes.btnContainer}>
        <Button className={classes.btnOfferta} variant="contained">
          Offerta
        </Button>
        <Button
          className={classes.btnKonfigure}
          color="inherit"
          variant="outlined"
        >
          Konfigurator PC
        </Button>
      </Box>
    </Box>
  );
}

export default MainContentHomePage;
