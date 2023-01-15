// styles
import { Box, Checkbox, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles/TabContentStyles";
// icons
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { useState } from "react";

export const CustomizedCheckbox = ({
  classes,
  id,
  handleClick,
  checked,
}: any) => {
  return (
    <Checkbox
      className={classes.checkbox}
      icon={<RadioButtonUncheckedIcon />}
      checkedIcon={<CheckCircleIcon />}
      checked={checked}
      name={id}
      onClick={() => handleClick(id)}
    />
  );
};

const Product = ({
  imgSrc,
  subTitle,
  title,
  price,
  id,
  handleClick,
  checked,
}: {
  imgSrc: string;
  subTitle?: string;
  title: string;
  price: number;
  id: number;
  checked: boolean;
  handleClick: (id: number) => void;
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
      <CustomizedCheckbox
        checked={checked}
        handleClick={handleClick}
        id={id}
        classes={classes}
      />
    </Paper>
  );
};

export default Product;
