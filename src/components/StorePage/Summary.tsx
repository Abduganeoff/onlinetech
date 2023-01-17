import { Box, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./TabContent/styles/TabContentStyles";
const PriceTag = ({ header, title, price }: any) => {
  return (
    <Box>
      <Typography variant="h6" align="center">
        {header}
      </Typography>
      <Typography variant="body1" align="center">
        {title || "-"}
      </Typography>
      <Typography gutterBottom variant="subtitle2" align="center">
        {"PLN " + price || "-"}
      </Typography>
    </Box>
  );
};

const Summary = ({ value, index, selectedProduct, ...other }: any) => {
  const classes = useStyles({});
  const [products, setProducts] = useState<any[]>();

  useEffect(() => {
    let temp: any = [];
    const items = window.localStorage.getItem("selectedItems");
    if (items) {
      const parsedItems = JSON.parse(items);
      for (let objKey in parsedItems) {
        parsedItems[objKey].map((x: any) => {
          if (x.checked === true) {
            temp.push(x);
          }
        });
      }
      setProducts(temp);
    }
  }, [selectedProduct]);

  const renderSummary = () => {
    return (
      <>
        <PriceTag header="Housing" title="Signum 300 solid" price={239} />
        <PriceTag header="Processor" title="Ryzen 3 4100" price={359} />
        <PriceTag
          header="Graphics"
          title="Nvidia GeForce GTX 1650 4GB"
          price={849}
        />
        <PriceTag
          header="Disk:"
          title="SSD 250GB (M.2 NVMe 3300MB/s)"
          price={149}
        />
        <PriceTag
          header="RAM:"
          title="8GB (1x8GB) (DDR4 3200MHz CL16)"
          price={299}
        />
        <PriceTag header="Motherboard:" title="Gigabyte B450M K" price={299} />
        <PriceTag header="PSU:" title="450W 80 Plus" price={179} />
        <PriceTag
          header="Installation, load tests"
          title="(Windows 11 Pro 64-bit FREE)"
          price={150}
        />
        <Typography variant="h6" align="center">
          TOTAL
        </Typography>
        <Typography variant="body1" align="center">
          PLN 2373 0
        </Typography>
      </>
    );
  };
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      id={`scrollable-auto-tabpanel-${index}`}
      className={classes.tabContent}
    >
      {value === index && (
        <Box p={3}>
          <>
            <Box className={classes.tabContentHeader}>
              <Typography variant="h4">Summary</Typography>
              <Typography align="right" variant="subtitle1">{`Step ${
                index + 1
              } of 11`}</Typography>
            </Box>
            <Box>{renderSummary()}</Box>
          </>
        </Box>
      )}
    </div>
  );
};

export default Summary;
