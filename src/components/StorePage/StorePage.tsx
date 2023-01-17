import { useEffect, useState } from "react";
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
  Snackbar,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles/StorageStyle";
// icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CloseIcon from "@material-ui/icons/Close";
import Summary from "./Summary";
import { Link } from "react-router-dom";
interface ValueKeys {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
  11: number;
}
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
const MyLink = (props: any) => <Link to="/" {...props} />;

function StorePage() {
  const classes = useStyles({});
  const [arg, setValue] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [currentItem, setCurrentItem] = useState<any>();
  const [isOpenForm, setIsOpenForm] = useState(false);

  useEffect(() => {
    const items = window.localStorage.getItem("selectedItems");
    if (items) {
      const parsedItems = JSON.parse(items);
      let item = parsedItems[arg].filter((x: any) => x.checked === true);
      setCurrentItem(item[0]);
    }
    if (!isDisabled) {
      window.localStorage.clear();
    }
  }, [selectedProduct]);
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
  const handleNextButton = () => {
    if (arg === 10) {
      setIsOpenForm(true);
    } else {
      setValue((prev) => prev + 1);
    }
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
          component={MyLink}
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
        value={arg}
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
          value={arg}
          index={0}
          data={processors}
          headerTitle="Processor type"
          setIsDisabled={setIsDisabled}
          setSelectedProduct={setSelectedProduct}
        />
        <TabContent
          value={arg}
          index={1}
          headerTitle={headerTitles[1]}
          data={cases}
          setSelectedProduct={setSelectedProduct}
        />

        <TabContent
          value={arg}
          index={2}
          headerTitle={headerTitles[2]}
          data={chips}
          setSelectedProduct={setSelectedProduct}
        />
        <TabContent
          value={arg}
          index={3}
          headerTitle={headerTitles[3]}
          data={graphicCards}
          isList={true}
          setSelectedProduct={setSelectedProduct}
        />
        <TabContent
          value={arg}
          index={4}
          headerTitle={headerTitles[4]}
          data={disks}
          setSelectedProduct={setSelectedProduct}
        />
        <TabContent
          value={arg}
          index={5}
          headerTitle={headerTitles[5]}
          data={rams}
          setSelectedProduct={setSelectedProduct}
        />
        <TabContent
          value={arg}
          index={6}
          headerTitle={headerTitles[6]}
          data={motherboards}
          setSelectedProduct={setSelectedProduct}
        />
        <TabContent
          value={arg}
          index={7}
          headerTitle={headerTitles[7]}
          data={coolers}
          setSelectedProduct={setSelectedProduct}
        />
        <TabContent
          value={arg}
          index={8}
          headerTitle={headerTitles[8]}
          data={secondDisks}
          setSelectedProduct={setSelectedProduct}
        />

        <TabContent
          value={arg}
          index={9}
          headerTitle={headerTitles[9]}
          data={chargers}
          isList={true}
          setSelectedProduct={setSelectedProduct}
        />
        <Summary value={arg} index={10} selectedProduct={selectedProduct} />
      </Box>
      <Paper elevation={5} className={classes.footer}>
        <Box style={{ display: "flex" }}>
          {currentItem?.imgSrc ? (
            <img className={classes.img} src={currentItem?.imgSrc} />
          ) : (
            <span className={classes.img} />
          )}
          {currentItem?.price && (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                marginLeft: "1rem",
              }}
            >
              <Typography variant="subtitle2" style={{ display: "block" }}>
                Total(gross)
              </Typography>
              <Typography variant="h4">{`${currentItem?.price} PLN`}</Typography>
            </Box>
          )}
        </Box>

        <Box>
          {arg > 0 && (
            <IconButton
              style={{ background: "rgba(0, 0, 0, 0.12)", marginRight: "1rem" }}
              color="default"
              aria-label="delete"
              onClick={() => setValue((prev) => prev - 1)}
            >
              <ArrowBackIosIcon />
            </IconButton>
          )}
          {arg === 10 && (
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
            onClick={handleNextButton}
          >
            {lables[arg + 1]}
          </Button>
        </Box>
      </Paper>
      {
        <Dialog
          open={isOpenForm}
          onClose={() => setIsOpenForm(false)}
          aria-labelledby="draggable-dialog-title"
          fullWidth
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            Subscribe
          </DialogTitle>
          <DialogContent>
            <form className={classes.root} noValidate autoComplete="off">
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="standard-error"
                  label="Delivery method"
                  defaultValue="Courier (free)"
                />
                <TextField
                  id="standard-error-helper-text"
                  label="Payment method"
                  defaultValue="Online payment"
                />
                <TextField
                  id="standard-error-helper-text"
                  defaultValue="Traditional transfer"
                />
                <TextField
                  id="standard-error-helper-text"
                  defaultValue="Cash on delivery (advance 30%)"
                />
                <TextField
                  id="standard-error"
                  label="The recipient's details"
                  defaultValue="Name *"
                />
                <TextField id="standard-error" defaultValue="Address *" />
                <TextField id="standard-error" defaultValue="Postcode *" />
                <TextField id="standard-error" defaultValue="City *" />
                <TextField id="standard-error" defaultValue="Email *" />
              </Box>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => setIsOpenForm(false)}
              color="primary"
            >
              Cancel
            </Button>
            <Button onClick={() => setIsOpenForm(false)} color="primary">
              Order
            </Button>
          </DialogActions>
        </Dialog>
      }
    </Box>
  );
}

export default StorePage;
