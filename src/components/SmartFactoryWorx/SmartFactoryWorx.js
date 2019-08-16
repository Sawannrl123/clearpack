import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {
  SiteContainer,
  StatusReport,
  TableReport,
  ChartReport
} from "../../components";
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
      height: "calc(100vh - 140px)",
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
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up("md")]: {
      overflow: "hidden"
    },
    overflow: "hidden"
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
              className={classes.spacing}
            >
              Mundra 5I/2I - 5000ml
            </Typography>
            <Divider className={classes.divider} />
            <div className={classes.spacing}>
              <Grid container spacing={2}>
                <Grid item sm={12} md={8}>
                  <div className={classes.matchHeight}>
                    <div className={classes.innerHeight}>
                      <TableReport tableData={props.stopData || {}} />
                    </div>
                    <div className={classes.innerHeight}>
                      <ChartReport
                        chartData={props.stopData || {}}
                        handleDialogToggle={props.handleDialogToggle}
                        handleChartViewChange={props.handleChartViewChange}
                        chartView={props.chartView}
                        handleDayChange={props.handleDayChange}
                        selectedDay={props.selectedDay}
                        handleSubmitComment={props.handleSubmitComment}
                        handleRequestVideo={props.handleRequestVideo}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item sm={12} md={4}>
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
