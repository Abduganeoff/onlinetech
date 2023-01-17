import { Box, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { DataType } from "../types";
import useStyles from "./styles/TabContentStyles";
import TabContentItem from "./TabContentItem";

interface TabContentProps {
  headerTitle: string;
  index: number;
  value: number;
  isList?: boolean;
  data: DataType;
  setIsDisabled?: (arg: boolean) => void;
  setSelectedProduct: (arg: any) => void;
}

const TabContent = (props: TabContentProps) => {
  const classes = useStyles({});
  const {
    headerTitle,
    data,
    value,
    index,
    isList = false,
    setIsDisabled,
    setSelectedProduct,
    ...other
  } = props;
  const [state, setState] = useState<DataType>(data);

  useEffect(() => {
    if (setIsDisabled) {
      const bool = state.some((item) => item.checked === true);
      setIsDisabled(bool);
    }
    const items = window.localStorage.getItem("selectedItems");
    if (items) {
      window.localStorage.setItem(
        "selectedItems",
        JSON.stringify({ ...JSON.parse(items), [value]: state })
      );
    } else {
      window.localStorage.setItem(
        "selectedItems",
        JSON.stringify({ [value]: state })
      );
    }
    setSelectedProduct(
      JSON.parse(window.localStorage.getItem("selectedItems") || "{}")
    );
  }, [state]);

  const handleClick = (id: number) => {
    const newData = state.map((item) => {
      if (id === item.id) {
        return item.checked ? item : { ...item, checked: true };
      }

      return { ...item, checked: false };
    });

    setState(newData);
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
              <Typography variant="h4">{headerTitle}</Typography>
              <Typography align="right" variant="subtitle1">{`Step ${
                index + 1
              } of 11`}</Typography>
            </Box>
            {
              <Box
                className={
                  isList
                    ? classes.listItemContainer
                    : classes.processorCardContainer
                }
              >
                {state.map((item: any) => (
                  <TabContentItem
                    contentType={headerTitle}
                    title={item.title}
                    subTitle={item.subTitle}
                    imgSrc={item.imgSrc}
                    price={item.price}
                    discountPrice={item.price - 50 <= 0 ? 50 : item.price - 50}
                    id={item.id}
                    key={item.id}
                    handleClick={handleClick}
                    checked={item.checked}
                  />
                ))}
              </Box>
            }
          </>
        </Box>
      )}
    </div>
  );
};

export default TabContent;
