import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

import { SiteContainer } from "../../components";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.error.main
  }
}));

const NotFound = ({ children }) => {
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
          {children}
        </Typography>
      </div>
    </SiteContainer>
  );
};

NotFound.propTypes = {
  children: PropTypes.any
};
NotFound.defaultProps = {
  children: "Page not found!"
};

export default NotFound;
