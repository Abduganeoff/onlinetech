import { useState } from "react";
// components
import TabContent from "./TabContent/TabContent";
// data
import {
  headerTitles,
  processors,
  cases,
  chips,
  coolers,
  graphicCards,
  motherboards,
  chargers,
  disks,
  rams,
  secondDisks,
} from "./mockData";
// styles
import {
  Box,
  Button,
  IconButton,
  Paper,
  Snackbar,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles/StorageStyle";
// icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CloseIcon from "@material-ui/icons/Close";

const lables = [
  "Start",
  "Case",
  "Processor",
  "Graphic",
  "Disk",
  "Ram",
  "Motherboard",
  "Cooling",
  "Second Disk",
  "Charger",
  "Summary",
  "Order",
];
function StorePage() {
  const classes = useStyles({});
  const [value, setValue] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [open, setOpen] = useState(false);

  function a11yProps(index: any) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  }

  const handleCloseSnackBar = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box className={classes.navBar}>
        <Typography align="center">
          Have questions? Write to: kontakt@artrel.pl
        </Typography>
      </Box>
      <Box>
        <Button
          className={classes.btnBack}
          variant="outlined"
          color="inherit"
          startIcon={<ArrowBackIosIcon />}
        >
          Return
        </Button>
        <Box>
          <Typography
            className={classes.headerTitle}
            align="center"
            color="textPrimary"
            variant="h3"
          >
            <span>Art</span>rel
          </Typography>
          <Typography align="center" color="primary">
            Konfigurator PC
          </Typography>
        </Box>
      </Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Start" {...a11yProps(0)} />
        <Tab disabled={!isDisabled} label="Case" {...a11yProps(1)} />
        <Tab disabled={!isDisabled} label="Processor" {...a11yProps(2)} />
        <Tab disabled={!isDisabled} label="Graphic" {...a11yProps(3)} />
        <Tab disabled={!isDisabled} label="Disk" {...a11yProps(4)} />
        <Tab disabled={!isDisabled} label="Ram" {...a11yProps(5)} />
        <Tab disabled={!isDisabled} label="Motherboard" {...a11yProps(6)} />
        <Tab disabled={!isDisabled} label="Cooling" {...a11yProps(7)} />
        <Tab disabled={!isDisabled} label="Second Disk" {...a11yProps(8)} />
        <Tab disabled={!isDisabled} label="Charger" {...a11yProps(9)} />
        <Tab disabled={!isDisabled} label="Summary" {...a11yProps(10)} />
      </Tabs>
      <Box className={classes.tabContentContainer}>
        <TabContent
          value={value}
          index={0}
          data={processors}
          headerTitle="Processor type"
          setIsDisabled={setIsDisabled}
        />
        <TabContent
          value={value}
          index={1}
          headerTitle={headerTitles[1]}
          data={cases}
        />

        <TabContent
          value={value}
          index={2}
          headerTitle={headerTitles[2]}
          data={chips}
        />
        <TabContent
          value={value}
          index={3}
          headerTitle={headerTitles[3]}
          data={graphicCards}
          isList={true}
        />
        <TabContent
          value={value}
          index={4}
          headerTitle={headerTitles[4]}
          data={disks}
        />
        <TabContent
          value={value}
          index={5}
          headerTitle={headerTitles[5]}
          data={rams}
        />
        <TabContent
          value={value}
          index={6}
          headerTitle={headerTitles[6]}
          data={motherboards}
        />
        <TabContent
          value={value}
          index={7}
          headerTitle={headerTitles[7]}
          data={coolers}
        />
        <TabContent
          value={value}
          index={8}
          headerTitle={headerTitles[8]}
          data={secondDisks}
        />

        <TabContent
          value={value}
          index={9}
          headerTitle={headerTitles[9]}
          data={chargers}
          isList={true}
        />
      </Box>
      <Paper elevation={5} className={classes.footer}>
        <Box></Box>
        <Box>
          {value > 0 && (
            <IconButton
              style={{ background: "rgba(0, 0, 0, 0.12)", marginRight: "1rem" }}
              color="default"
              aria-label="delete"
              onClick={() => setValue((prev) => prev - 1)}
            >
              <ArrowBackIosIcon />
            </IconButton>
          )}
          {value === 10 && (
            <>
              <Button
                className={classes.footerBtn}
                variant="contained"
                size="large"
                endIcon={<NavigateNextIcon />}
                onClick={() => setOpen(true)}
              >
                Copy Link
              </Button>
              <Snackbar
                ContentProps={{
                  style: { background: "black", color: "white" },
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleCloseSnackBar}
                message="Configuration link copied to clipboard"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    className={classes.close}
                    onClick={() => setOpen(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                }
              />
            </>
          )}
          <Button
            disabled={!isDisabled}
            className={classes.footerBtn}
            variant="contained"
            size="large"
            endIcon={<NavigateNextIcon />}
            onClick={() => setValue((prev) => prev + 1)}
          >
            {lables[value + 1]}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default StorePage;
