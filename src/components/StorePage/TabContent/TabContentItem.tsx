import {
  Box,
  Checkbox,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import { headerTitles } from "../mockData";
import Product, { CustomizedCheckbox } from "./Product";
import useStyles from "./styles/TabContentStyles";

function TabContentItem({ title, subTitle, imgSrc, contentType, price }: any) {
  const classes = useStyles({});
  const renderContentItem = () => {
    switch (contentType) {
      case headerTitles[0]:
      case headerTitles[1]:
      case headerTitles[2]:
      case headerTitles[7]:
      case headerTitles[6]:
        return (
          <Product
            title={title}
            subTitle={subTitle}
            imgSrc={imgSrc}
            price={price}
          />
        );
      case headerTitles[3]:
        return (
          <Paper className={classes.paperContainer} elevation={2}>
            <Typography style={{ fontWeight: 600 }} variant="h5">
              {title}
            </Typography>
            <Box className={classes.rightAction}>
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                {`PLN ${price}`}
              </Typography>
              <CustomizedCheckbox classes={classes} />
            </Box>
          </Paper>
        );
      default:
        break;
    }
  };

  return <>{renderContentItem()}</>;
}

export default TabContentItem;
