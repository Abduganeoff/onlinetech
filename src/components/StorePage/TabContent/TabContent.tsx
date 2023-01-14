import { Box, Typography } from "@material-ui/core";
import useStyles from "../styles/StorageStyle";
import TabContentItem from "./TabContentItem";

interface TabContentProps {
  headerTitle: React.ReactNode;
  index: number;
  value: number;
  data: Record<string, unknown>[];
}

const TabContent = (props: TabContentProps) => {
  const classes = useStyles({});
  const { headerTitle, data, value, index, ...other } = props;
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
              <div className={classes.processorCardContainer}>
                {data.map((item: Record<string, unknown>) => (
                  <TabContentItem
                    title={item.title}
                    subTitle={item.subTitle}
                    brandLogo={item.brandLogo}
                  />
                ))}
              </div>
            }
          </>
        </Box>
      )}
    </div>
  );
};

export default TabContent;
