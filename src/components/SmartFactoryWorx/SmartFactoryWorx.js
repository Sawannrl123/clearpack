import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { SiteContainer, StatusReport, TableReport } from "../../components";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles(theme => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "4px",
      height: "4px"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 2px white"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.light,
      outline: "1px solid white"
    },
    body: {
      [theme.breakpoints.up("md")]: {
        overflow: "hidden"
      }
    }
  },
  root: {
    color: theme.palette.common.white
  },
  divider: {
    backgroundColor: theme.palette.common.white
  },
  spacing: {
    padding: theme.spacing(1)
  },
  matchHeight: {
    [theme.breakpoints.up("md")]: {
      height: "calc(100vh - 128px)",
      overflow: "hidden"
    }
  },
  innerHeight: {
    [theme.breakpoints.up("md")]: {
      height: "50%",
      overflow: "hidden"
    },
    padding: theme.spacing(1)
  },
  StatusReport: {
    [theme.breakpoints.up("md")]: {
      overflow: "hidden"
    },
    overflow: "hidden"
  },
  status: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%"
    }
  },
  title: {
    padding: theme.spacing(1),
    fontSize: "15px",
    lineHeight: 1
  }
}));

const SmartFactoryWorx = props => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      {props.appData !== null ? (
        <SiteContainer backgroundColor={theme.palette.grey[900]}>
          <div className={classes.root}>
            <Typography
              variant="h6"
              color="inherit"
              align="center"
              className={classes.title}
            >
              Mundra 5I/2I - 5000ml
            </Typography>
            <Divider className={classes.divider} />
            <div className={classes.spacing}>
              <Grid container spacing={2}>
                <Grid item sm={12} md={10} className={classes.status}>
                  <div className={classes.matchHeight}>
                    <TableReport
                      tableData={props.appData || {}}
                      tableView={props.tableView}
                      handleTableViewChange={props.handleTableViewChange}
                      handleDialogToggle={props.handleDialogToggle}
                    />
                  </div>
                </Grid>
                <Grid item sm={12} md={2}>
                  <div
                    className={`${classes.matchHeight} ${classes.StatusReport}`}
                  >
                    <StatusReport statusData={props.appData.filler} />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </SiteContainer>
      ) : (
        <SiteContainer
          fullPage
          center
          backgroundColor={theme.palette.grey[900]}
        >
          <div style={{ width: 40, margin: "0 auto" }}>
            <CircularProgress />
          </div>
        </SiteContainer>
      )}
    </React.Fragment>
  );
};

export default SmartFactoryWorx;
