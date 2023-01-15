// styles
import { Box, Checkbox, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles/TabContentStyles";
// icons
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

export const CustomizedCheckbox = ({ classes }: any) => (
  <Checkbox
    className={classes.checkbox}
    icon={<RadioButtonUncheckedIcon />}
    checkedIcon={<CheckCircleIcon />}
  />
);
const Product = ({
  imgSrc,
  subTitle,
  title,
  price,
}: {
  imgSrc: string;
  subTitle?: string;
  title: string;
  price: number;
}) => {
  const classes = useStyles({});

  return (
    <Paper elevation={2} className={classes.processorCard}>
      <Typography
        className={classes.processorCardTitle}
        variant="h5"
        align="center"
      >
        {title}
      </Typography>
      {subTitle && <Typography align="center">{subTitle}</Typography>}
      <Box className={classes.imgContainer}>
        <img src={imgSrc} alt={`${title}-pic`} />
      </Box>
      <Typography align="center">{`PLN ${price}`}</Typography>
      <CustomizedCheckbox classes={classes} />
    </Paper>
  );
};

export default Product;
