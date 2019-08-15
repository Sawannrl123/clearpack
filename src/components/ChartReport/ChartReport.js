import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { getDateArray } from "../../utils";

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value.index !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={2}>{children}</Box>
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {},
  buttonGroup: {
    [theme.breakpoints.up("sm")]: {
      transform: "rotate(270deg)",
      WebkitTransform: "rotate(270deg)",
      msTransform: "rotate(270deg)",
      MozTransform: "rotate(270deg)",
      OTransform: "rotate(270deg)"
    }
  },
  button: {
    textTransform: "capitalize",
    fontSize: 13,
    width: 92,
    "&.active": {
      backgroundColor: theme.palette.secondary.main
    }
  },
  days: {
    height: "100%",
    overflow: "hidden"
  },
  divider: {
    backgroundColor: theme.palette.grey[300]
  },
  swipeable: {
    height: "calc(100% - 48px)",
    overflowY: "auto"
  },
  simple: {
    padding: theme.spacing(2)
  }
}));

const ChartReport = ({
  chartData,
  handleDialogToggle,
  handleChartViewChange,
  handleDayChange,
  chartView,
  selectedDay
}) => {
  const classes = useStyles();

  const renderButtons = () => (
    <ButtonGroup
      color="primary"
      variant="contained"
      className={classes.buttonGroup}
    >
      <Button
        className={
          chartView === "event"
            ? `${classes.button} active`
            : `${classes.button}`
        }
        onClick={() => handleChartViewChange("event")}
      >
        Event Bar
      </Button>
      <Button
        className={
          chartView === "pie" ? `${classes.button} active` : `${classes.button}`
        }
        onClick={() => handleChartViewChange("pie")}
      >
        Pie Chart
      </Button>
    </ButtonGroup>
  );

  const renderEventBar = () => {
    return <React.Fragment>{renderDayTabs()}</React.Fragment>;
  };

  const renderPieChart = () => {
    return <p>Nirala</p>;
  };

  const dayChange = (event, value) => {
    event.persist();
    handleDayChange({
      index: value,
      value: event.target.innerText
    });
  };

  const renderDayTabs = () => {
    const parsedMachine =
      chartData &&
      Object.keys(chartData).filter(machine => {
        return (
          chartData[machine].hasOwnProperty("pie") ||
          chartData[machine].hasOwnProperty("event")
        );
      });
    if (
      chartData &&
      parsedMachine &&
      parsedMachine.length &&
      chartData[parsedMachine[0]].hasOwnProperty("event")
    ) {
      const eventData = chartData[parsedMachine[0]].event;
      const startDate = new Date(eventData[0].start_time);
      const endDate = new Date(eventData[eventData.length - 1].end_time);
      const days = getDateArray(startDate, endDate);
      days.push(new Date());
      if (days.length > 0) {
        return (
          <Paper className={classes.days}>
            <Tabs
              value={selectedDay.index}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              onChange={(event, value) => dayChange(event, value)}
            >
              {days.map((day, index) => {
                return (
                  <Tab
                    value={index}
                    label={day.toLocaleDateString()}
                    key={index}
                  />
                );
              })}
            </Tabs>
            <Divider className={classes.divider} />
            <SwipeableViews
              axis="x"
              index={selectedDay.index}
              onChangeIndex={value => handleDayChange(value)}
              className={classes.swipeable}
            >
              {/* {renderTabContent()} */}
              {days.map((day, index) => {
                return (
                  <TabPanel
                    value={{
                      index,
                      value: day.toLocaleDateString()
                    }}
                    index={index}
                    dir="ltr"
                    key={index}
                  >
                    Item {index}
                  </TabPanel>
                );
              })}
            </SwipeableViews>
          </Paper>
        );
      }
      return <Paper className={classes.simple}>Sawan</Paper>;
    }
  };

  const renderChart = () => {
    return chartView === "event" ? renderEventBar() : renderPieChart();
  };

  return (
    <Grid container spacing={2} style={{ height: "100%" }}>
      <Grid
        item
        xs={12}
        sm={2}
        style={{
          alignSelf: "center",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {renderButtons()}
      </Grid>
      <Grid item xs={12} sm={10} style={{ height: "100%" }}>
        {renderChart()}
      </Grid>
    </Grid>
  );
};

ChartReport.propTypes = {
  chartData: PropTypes.object.isRequired,
  handleDialogToggle: PropTypes.func.isRequired,
  handleChartViewChange: PropTypes.func.isRequired,
  handleDayChange: PropTypes.func.isRequired,
  chartView: PropTypes.string.isRequired,
  selectedDay: PropTypes.object.isRequired
};

ChartReport.defaultProps = {
  chartData: {},
  handleDialogToggle: () => {},
  handleChartViewChange: () => {},
  handleDayChange: () => {},
  chartView: "event",
  selectedDay: {}
};

export default ChartReport;
