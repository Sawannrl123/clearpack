import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import { SiteContainer, ChartReport } from "../../components";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      height: "calc(100vh - 80px)"
    }
  }
}));

const Event = props => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      {props.stopData !== null && props.appData !== null ? (
        <SiteContainer fullPage backgroundColor={theme.palette.grey[900]}>
          <div className={classes.root}>
            <ChartReport
              chartData={props.stopData || {}}
              handleDialogToggle={props.handleDialogToggle}
              handleChartViewChange={props.handleChartViewChange}
              chartView={props.chartView}
              handleDayChange={props.handleDayChange}
              selectedDay={props.selectedDay}
              handleSubmitComment={props.handleSubmitComment}
              handleRequestVideo={props.handleRequestVideo}
              loading={props.loading}
            />
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

export default Event;
