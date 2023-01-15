import { Box, Checkbox, Paper, Typography } from "@material-ui/core";
// styles
import useStyles from "./styles/TabContentStyles";
// icons
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

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
      <Checkbox
        className={classes.checkbox}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
    </Paper>
  );
}

export default TabContentItem;
