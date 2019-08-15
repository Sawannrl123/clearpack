import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: props => props.backgroundColor,
      minHeight: props => props.fullPage && "calc(100vh - 80px)",
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
  center: PropTypes.bool,
  backgroundColor: PropTypes.string
};

SiteContainer.defaultProps = {
  fullPage: false,
  center: false,
  backgroundColor: "#f5f5f5"
};

export default SiteContainer;
