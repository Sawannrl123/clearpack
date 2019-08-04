import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { SITE_URL } from "../../utils";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "10px 0",
    backgroundColor: theme.palette.error.light
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: "none"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <Link to="/" className={classes.link}>
          {SITE_URL}
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
