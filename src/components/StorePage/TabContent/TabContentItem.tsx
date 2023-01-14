import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles/TabContentStyles";

interface TabContentItemProps {
  title: string;
  subTitle: string;
  brandLogo: string;
}
function TabContentItem({ title, subTitle, brandLogo }: any) {
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
      <Typography align="center">{subTitle}</Typography>
      <Box className={classes.imgContainer}>
        <img src={brandLogo} alt={`${title}-pic`} />
      </Box>
    </Paper>
  );
}

export default TabContentItem;