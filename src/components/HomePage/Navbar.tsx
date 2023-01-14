import { Box, List, ListItem, Typography } from "@material-ui/core";
import useStyles from "./styles/NavbarStyle";

function Navbar() {
  const classes = useStyles({});
  return (
    <Box className={classes.root}>
      <Typography className={classes.HeaderTitle}>
        <span className={classes.artText}>Art</span>rel
      </Typography>
      <List className={classes.navItems}>
        <ListItem button className={classes.navItem}>
          <Typography className={classes.ListItemText}>Oferta</Typography>
        </ListItem>
        <ListItem button>
          <Typography className={classes.ListItemText}>
            Konfigurator pc
          </Typography>
        </ListItem>
        <ListItem button>
          <Typography className={classes.ListItemText}>
            Zapitaj o wycene
          </Typography>
        </ListItem>
        <ListItem button className={classes.navItem}>
          <Typography className={classes.ListItemText}>Kontakt</Typography>
        </ListItem>
        <ListItem button className={classes.navItem}>
          <Typography className={classes.ListItemText}>Cart</Typography>
        </ListItem>
      </List>
    </Box>
  );
}

export default Navbar;
