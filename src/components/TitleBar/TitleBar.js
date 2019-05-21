import React from "react";
import { Typography, AppBar } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = theme =>
  console.log(theme) || {
    titleBar: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    }
  };

const TitleBar = props => {
  const { classes } = props;
  return (
    <AppBar className={classes.titleBar} position="static">
      <Typography variant="h5" align="left" color="inherit">
        GitHub Project
      </Typography>
    </AppBar>
  );
};
export default withStyles(styles)(TitleBar);
