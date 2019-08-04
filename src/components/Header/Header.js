import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import { Logo } from "../../assets";
import { SITE_NAME } from "../../utils";

const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    root: {
      flexGrow: 1,
      color: theme.palette.common.white
    },
    logo: {
      maxHeight: "70px"
    },
    logoContainer: {
      fontSize: 0,
      padding: "5px 0"
    },
    headerContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.up("sm")]: {
        justifyContent: "space-between",
        flexDirection: "row"
      }
    },
    text: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
        marginBottom: "5px"
      }
    }
  };
});

const Header = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Container>
          <Toolbar className={classes.headerContainer}>
            <div className={classes.logoContainer}>
              <img src={Logo} alt={SITE_NAME} className={classes.logo} />
            </div>
            <Typography variant="h4" color="inherit" className={classes.text}>
              {children}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.any
};

export default Header;
