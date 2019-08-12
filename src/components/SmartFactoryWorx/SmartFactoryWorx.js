import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { SiteContainer } from "../../components";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.error.main
  }
}));

const SmartFactoryWorx = props => {
  const classes = useStyles();
  return (
    <SiteContainer fullPage center>
      <div className={classes.root}>
        <Typography
          variant="h5"
          color="inherit"
          align="center"
          className={classes.text}
        >
          Sawan Nirala
        </Typography>
      </div>
    </SiteContainer>
  );
};

export default SmartFactoryWorx;
