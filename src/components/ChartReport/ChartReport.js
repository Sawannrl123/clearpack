import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import { Doughnut } from "react-chartjs-2";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
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
  },
  title: {
    textTransform: "capitalize",
    fontSize: 14,
    fontWeight: 600
  },
  status: {
    width: "100%",
    height: 30,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },
  video: {
    height: 10,
    backgroundColor: "#1D1B1B",
    cursor: "pointer"
  },
  comment: {
    height: 10,
    backgroundColor: "#FFFaFA",
    cursor: "pointer"
  },
  commentField: {},
  pie: {
    height: "100%",
    padding: theme.spacing(2)
  },
  pieLabel: {
    marginTop: theme.spacing(2)
  }
}));

const ChartReport = ({
  chartData,
  handleDialogToggle,
  handleChartViewChange,
  handleDayChange,
  handleSubmitComment,
  handleRequestVideo,
  chartView,
  selectedDay
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [values, setValues] = useState("");
  const parsedMachine =
    chartData &&
    Object.keys(chartData).filter(machine => {
      return chartData[machine].hasOwnProperty("event");
    });

  const parsedPieMachine =
    chartData &&
    Object.keys(chartData).filter(machine => {
      return chartData[machine].hasOwnProperty("pie");
    });

  const handleChange = event => {
    setValues(event.target.value);
  };

  const colors = {
    green_stop: "#0CBA5B",
    fault_stop: "#A9DBDE",
    not_stop: "#E60748",
    block_stop: "#BEBEBE",
    waiting_time: "#FEF729"
  };

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
    return (
      <Paper className={classes.pie}>
        <Grid container>
          {parsedPieMachine.map((machine, index) => {
            return (
              <Grid item key={index}>
                {renderDoughnutChart(machine)}
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    );
  };

  const renderDoughnutChart = machine => {
    const pickedData = chartData[machine].pie;

    const labels = pickedData.map(label => {
      const title = label._id.replace("_", " ");
      return `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
    });

    const values = pickedData.map(value => value.total);

    const background = pickedData.map(value => colors[value._id]);

    const data = {
      labels,
      datasets: [
        {
          backgroundColor: background,
          hoverBackgroundColor: background,
          data: values
        }
      ]
    };
    return (
      <div>
        <Doughnut data={data} />
        <Typography
          variant="h6"
          component="h6"
          align="center"
          className={`${classes.title} ${classes.pieLabel}`}
        >
          {machine}
        </Typography>
      </div>
    );
  };

  const dayChange = (event, value) => {
    event.persist();
    handleDayChange({
      index: value,
      value: event.target.innerText
    });
  };

  const submitComment = data => {
    const comment = {
      message: values,
      info: data
    };
    handleSubmitComment(comment);
  };

  const openCommentPopup = data => {
    const popUpData = {
      title: "Comment on this stop",
      body: (
        <TextField
          id="stop-comment"
          label="Comment"
          className={classes.commentField}
          value={values}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          multiline
          rows={5}
          rowsMax={10}
        />
      ),
      action: (
        <div>
          <Button
            className={classes.button}
            onClick={() => handleDialogToggle(false, null)}
          >
            Close
          </Button>
          <Button
            className={classes.button}
            onClick={() => submitComment(data)}
          >
            Submit
          </Button>
        </div>
      )
    };
    handleDialogToggle(true, popUpData);
  };

  const openVideoPopup = data => {
    handleRequestVideo(data);
  };

  const renderTabBody = (eventData, day) => {
    const currentDay = new Date(day).getDay();
    return parsedMachine.map((machine, i) => {
      return (
        <TableRow
          key={i}
          style={{
            backgroundColor:
              i % 2 === 0 ? theme.palette.grey[300] : theme.palette.grey[400]
          }}
        >
          <TableCell
            component="th"
            scope="row"
            key={i}
            className={classes.title}
          >
            {machine}
          </TableCell>
          {eventData.map((event, index) => {
            const date = new Date(event.start_time);
            const compareDay = date.getDay();
            if (compareDay === currentDay) {
              const title = event.stop_name.replace("_", " ");
              return (
                <TableCell key={index}>
                  <div
                    className={classes.status}
                    style={{
                      backgroundColor: colors[event.stop_name]
                    }}
                    title={`${title.charAt(0).toUpperCase()}${title.slice(1)}`}
                  >
                    {event.stop_name === "not_stop" && (
                      <React.Fragment>
                        <div
                          className={classes.comment}
                          onClick={e => {
                            openCommentPopup(event);
                          }}
                          title="Comment on Stop"
                        />
                        <div
                          className={classes.video}
                          onClick={e => {
                            openVideoPopup(event);
                          }}
                          title="Open Stop Video"
                        />
                      </React.Fragment>
                    )}
                  </div>
                </TableCell>
              );
            }
            return null;
          })}
        </TableRow>
      );
    });
  };

  const renderTabHeader = (eventData, day) => {
    const currentDay = new Date(day).getDay();
    return eventData.map((event, i) => {
      const date = new Date(event.start_time);
      const compareDay = date.getDay();
      if (compareDay === currentDay) {
        const from = date.toLocaleTimeString();
        const to = new Date(event.end_time).toLocaleTimeString();
        return (
          <TableCell key={i} align="center">{`${from} - ${to}`}</TableCell>
        );
      }
      return null;
    });
  };

  const renderDayTabs = () => {
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
      if (days.length > 1) {
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
                    {renderTableContent(eventData, day)}
                  </TabPanel>
                );
              })}
            </SwipeableViews>
          </Paper>
        );
      }
      return (
        <Paper className={classes.simple}>
          {renderTableContent(eventData, new Date())}
        </Paper>
      );
    }
  };

  const renderTableContent = (eventData, day) => {
    return (
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell key="blank"> </TableCell>
            {renderTabHeader(eventData, day)}
          </TableRow>
        </TableHead>
        <TableBody>{renderTabBody(eventData, day)}</TableBody>
      </Table>
    );
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
  handleSubmitComment: PropTypes.func.isRequired,
  handleRequestVideo: PropTypes.func.isRequired,
  chartView: PropTypes.string.isRequired,
  selectedDay: PropTypes.object.isRequired
};

ChartReport.defaultProps = {
  chartData: {},
  handleDialogToggle: () => {},
  handleChartViewChange: () => {},
  handleDayChange: () => {},
  handleSubmitComment: () => {},
  handleRequestVideo: () => {},
  chartView: "event",
  selectedDay: {}
};

export default ChartReport;
