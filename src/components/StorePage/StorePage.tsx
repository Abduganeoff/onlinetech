import { useState } from "react";
// components
import TabPanel from "./TabelPanel";
import TabContent from "./TabContent/TabContent";
// data
import { headerTitles, processors, cases, chips } from "./mockData";
// styles
import { Box, Button, Tab, Tabs, Typography } from "@material-ui/core";
import useStyles from "./styles/StorageStyle";
// icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function StorePage() {
  const classes = useStyles({});
  const [value, setValue] = useState(0);

  function a11yProps(index: any) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.root}>
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
        <Tab label="Case" {...a11yProps(1)} />
        <Tab label="Processor" {...a11yProps(2)} />
        <Tab label="Graphic" {...a11yProps(3)} />
        <Tab label="Disk" {...a11yProps(4)} />
        <Tab label="Ram" {...a11yProps(5)} />
        <Tab label="Motherboard" {...a11yProps(6)} />
        <Tab label="Cooling" {...a11yProps(7)} />
        <Tab label="Second Disk" {...a11yProps(8)} />
        <Tab label="Charger" {...a11yProps(9)} />
        <Tab label="Summary" {...a11yProps(10)} />
      </Tabs>
      <Box className={classes.tabContentContainer}>
        <TabContent
          value={value}
          index={0}
          data={processors}
          headerTitle="Processor type"
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
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    </Box>
  );
}

export default StorePage;
