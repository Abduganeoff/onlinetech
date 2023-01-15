import { Box, Typography } from "@material-ui/core";
import { ProcessorsType } from "../mockData";
import { DataType } from "../types";
import useStyles from "./styles/TabContentStyles";
import TabContentItem from "./TabContentItem";

interface TabContentProps {
  headerTitle: string;
  index: number;
  value: number;
  isList?: boolean;
  data: DataType;
}

const TabContent = (props: TabContentProps) => {
  const classes = useStyles({});
  const { headerTitle, data, value, index, isList = false, ...other } = props;
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
                {data.map((item: any, indx) => (
                  <TabContentItem
                    contentType={headerTitle}
                    title={item.title}
                    subTitle={item.subTitle}
                    imgSrc={item.imgSrc}
                    price={item.price}
                    key={indx}
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
