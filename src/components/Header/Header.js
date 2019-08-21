import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import SignalCellular4Bar from "@material-ui/icons/SignalCellular4Bar";
import SignalCellularOff from "@material-ui/icons/SignalCellularOff";
import PropTypes from "prop-types";
import { Logo } from "../../assets";
import { SITE_NAME } from "../../utils";

const useStyles = makeStyles(theme => {
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
      padding: "5px 0",
      cursor: "pointer"
    },
    headerContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
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
    },
    connected: {
      color: theme.customColor.green.main
    },
    disconnected: {
      color: theme.customColor.red.main
    },
    connectionStatus: {
      position: "absolute",
      left: "-16px",
      top: "20px",
      [theme.breakpoints.down("sm")]: {
        left: "20px"
      }
    }
  };
});

const Header = ({ children, logo, connectionStatus }) => {
  const classes = useStyles();

  const renderConnectionStatus = () => {
    if (connectionStatus)
      return (
        <span
          title="Connected"
          className={`${classes.connected} ${classes.connectionStatus}`}
        >
          <SignalCellular4Bar />
        </span>
      );
    return (
      <span
        title="Disconnected"
        className={`${classes.disconnected} ${classes.connectionStatus}`}
      >
        <SignalCellularOff />
      </span>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Container>
          <Toolbar className={classes.headerContainer}>
            {renderConnectionStatus()}
            <Link to={"/"} className={classes.logoContainer}>
              <img src={logo} alt={SITE_NAME} className={classes.logo} />
            </Link>
            {children}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.any,
  logo: PropTypes.string,
  goToHome: PropTypes.func.isRequired,
  connectionStatus: PropTypes.bool.isRequired
};

Header.defaultProps = {
  logo: Logo,
  goToHome: () => {},
  connectionStatus: true
};

export default Header;
