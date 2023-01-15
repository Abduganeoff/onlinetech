import {
  Box,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography,
} from "@material-ui/core";
import { headerTitles } from "../mockData";
import Product, { CustomizedCheckbox } from "./Product";
import useStyles from "./styles/TabContentStyles";

function TabContentItem({
  title,
  subTitle,
  imgSrc,
  contentType,
  price,
  discountPrice,
  id,
  handleClick,
  checked,
}: any) {
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
            id={id}
            handleClick={handleClick}
            checked={checked}
          />
        );
      case headerTitles[3]:
      case headerTitles[9]:
        return (
          <Paper className={classes.paperContainer} elevation={2}>
            <Typography style={{ fontWeight: 600 }} variant="h5">
              {title}
            </Typography>
            <Box className={classes.rightAction}>
              <Typography
                variant="h5"
                style={{ fontWeight: 600, marginRight: "1.5rem" }}
              >
                {`PLN ${price}`}
              </Typography>
              <CustomizedCheckbox
                handleClick={handleClick}
                id={id}
                classes={classes}
                checked={checked}
              />
            </Box>
          </Paper>
        );
      case headerTitles[4]:
      case headerTitles[5]:
      case headerTitles[8]:
        return (
          <Card raised style={{ width: "32%" }}>
            <CardContent>
              <Typography
                align="center"
                variant="h4"
                style={{ fontWeight: 500 }}
              >
                {title}
              </Typography>
              <Typography align="center">{subTitle}</Typography>
              <Typography align="center" variant="subtitle2">
                <span style={{ textDecoration: "line-through", color: "red" }}>
                  {price + " zl"}
                </span>
                {` PLN ${discountPrice}`}
              </Typography>
              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CustomizedCheckbox
                  handleClick={handleClick}
                  id={id}
                  classes={classes}
                  checked={checked}
                />
              </CardActions>
            </CardContent>
          </Card>
        );
      default:
        break;
    }
  };

  return <>{renderContentItem()}</>;
}

export default TabContentItem;
