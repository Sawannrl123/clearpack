import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: theme.palette.grey[100],
      minHeight: props => props.fullPage && "calc(100vh - 100px)",
      display: "flex",
      justifyContent: props => props.center && "center",
      alignItems: props => props.center && "center"
    }
  };
});

const SiteContainer = ({ children, ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Container>{children}</Container>
    </div>
  );
};

SiteContainer.propTypes = {
  children: PropTypes.any,
  fullPage: PropTypes.bool,
  center: PropTypes.bool
};

SiteContainer.defaultProps = {
  fullPage: false,
  center: false
};

export default SiteContainer;
