import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import { Doughnut } from "react-chartjs-2";
import Box from "@material-ui/core/Box";
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
    [theme.breakpoints.up("md")]: {
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
    overflow: "auto"
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
  pie: {
    height: "100%",
    padding: theme.spacing(2)
  },
  pieLabel: {
    marginTop: theme.spacing(2)
  },
  cell: {
    padding: theme.spacing(1)
  }
}));

const ChartReport = ({
  chartData,
  handleDialogToggle,
  handleChartViewChange,
  handleSubmitComment,
  handleRequestVideo,
  chartView,
  loading
}) => {
  const classes = useStyles();
  const theme = useTheme();
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

  const submitComment = data => {
    loading(true);
    const value = document.getElementById("stop-comment").value;
    const comment = {
      message: value,
      info: data
    };
    handleSubmitComment(comment)
      .then(() => {
        loading(false);
        const popUpData = {
          title: "Comment Sucessfully Posted",
          body: (
            <Typography variant="h5" component="h5" align="center">
              Comment Sucessfully Posted! Your feedback is valuable to us keep
              commenting. Thanks
            </Typography>
          ),
          action: (
            <div>
              <Button
                className={classes.button}
                onClick={() => handleDialogToggle(false, null)}
              >
                Close
              </Button>
            </div>
          )
        };
        handleDialogToggle(true, popUpData);
      })
      .catch(error => {
        loading(false);
        console.error(error);
      });
  };

  const openCommentPopup = data => {
    const popUpData = {
      title: "Comment on this stop",
      body: (
        <TextField
          id="stop-comment"
          label="Comment"
          className={classes.commentField}
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
    loading(true);
    handleRequestVideo(data)
      .then(video => {
        const popUpData = {
          title: "Stop Video",
          body: (
            <video width="100%" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ),
          action: null
        };
        loading(false);
        handleDialogToggle(true, popUpData);
      })
      .catch(error => {
        loading(false);
        console.error(error);
      });
  };

  const renderTabBody = eventData => {
    return parsedMachine.map((machine, i) => {
      return (
        <TableRow key={i}>
          <TableCell
            component="th"
            scope="row"
            key={i}
            className={classes.title}
          >
            {machine}
          </TableCell>
          {eventData.map((event, index) => {
            return (
              <TableCell key={index} className={classes.cell}>
                <div
                  className={classes.status}
                  style={{
                    backgroundColor: colors[event.stop_name],
                    border: `1px solid ${theme.palette.grey[300]}`,
                    minWidth: 25
                  }}
                  title={`${new Date(
                    event.start_time
                  ).toLocaleString()} - ${new Date(
                    event.end_time
                  ).toLocaleString()}`}
                >
                  {event.stop_name === "not_stop" && (
                    <React.Fragment>
                      <div
                        className={classes.comment}
                        onClick={e => {
                          openCommentPopup(event);
                        }}
                      />
                      <div
                        className={classes.video}
                        onClick={e => {
                          openVideoPopup(event);
                        }}
                      />
                    </React.Fragment>
                  )}
                </div>
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  };

  const renderTabHeader = eventData => {
    return eventData.map((event, i) => {
      return (
        <TableCell key={i} align="center">
          {" "}
        </TableCell>
      );
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
      return renderTableContent(eventData);
    }
  };

  const renderTableContent = eventData => {
    return (
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell key="blank"> </TableCell>
            {renderTabHeader(eventData)}
          </TableRow>
        </TableHead>
        <TableBody>{renderTabBody(eventData)}</TableBody>
      </Table>
    );
  };

  const renderChart = () => {
    return (
      <Paper className={classes.days}>
        {chartView === "event" ? renderEventBar() : renderPieChart()}
      </Paper>
    );
  };

  return (
    <Grid container spacing={2} style={{ height: "100%" }}>
      <Grid
        item
        xs={12}
        md={2}
        style={{
          alignSelf: "center",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {renderButtons()}
      </Grid>
      <Grid item xs={12} md={10} style={{ height: "100%" }}>
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
  loading: PropTypes.func.isRequired,
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
  loading: () => {},
  chartView: "event",
  selectedDay: {}
};

export default ChartReport;
