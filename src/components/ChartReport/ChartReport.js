import React from "react";
import PropTypes from "prop-types";
import { startCase } from "lodash";
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
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
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
  root: {
    height: "100%",
    position: "relative",
    textAlign: "center"
    // [theme.breakpoints.up("md")]: {
    //   width: "calc(100% - 50px)",
    //   marginLeft: "50px"
    // }
  },
  buttonGroup: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      transform: "rotate(270deg)",
      WebkitTransform: "rotate(270deg)",
      msTransform: "rotate(270deg)",
      MozTransform: "rotate(270deg)",
      OTransform: "rotate(270deg)",
      position: "absolute",
      top: "50%",
      left: "-125px",
      marginTop: "-17px",
      marginBottom: 0
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
    height: "calc(50% - 8px)",
    overflow: "auto"
  },
  title: {
    textTransform: "capitalize",
    fontSize: 14,
    fontWeight: 600,
    whiteSpace: "nowrap"
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
    padding: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  pieLabel: {
    marginTop: theme.spacing(2)
  },
  cell: {
    padding: theme.spacing(1, 0)
  },
  fullWidth: {
    width: "100%"
  },
  noBorder: {
    border: 0
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
  const inputLabel = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState({
    message: "",
    category: "",
    partList: "",
    stop: null
  });
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

  const handleClickOpen = (name, data) => () => {
    setOpen(true);
    setComment({ ...comment, [name]: data });
  };

  const handleClose = () => {
    setOpen(false);
    resetComment();
  };

  const resetComment = () => {
    setComment({
      message: "",
      category: "",
      partList: "",
      stop: null
    });
  };

  const colors = {
    green_stop: "#0CBA5B",
    fault_stop: "#A9DBDE",
    not_stop: "#E60748",
    block_stop: "#BEBEBE",
    waiting_time: "#FEF729"
  };

  const handleChange = name => event => {
    setComment({ ...comment, [name]: event.target.value });
  };

  const renderCommentDialog = () => {
    return (
      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="comment-dialog"
      >
        <form onSubmit={submitComment}>
          <DialogTitle id="comment-dialog">Comment on this stop</DialogTitle>
          <DialogContent>{renderCommentBody()}</DialogContent>
          <DialogActions>
            <Button className={classes.button} onClick={handleClose}>
              Close
            </Button>
            <Button className={classes.button} type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
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
      <Grid container>
        {parsedPieMachine.map((machine, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              {renderDoughnutChart(machine)}
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const renderDoughnutChart = machine => {
    const pickedData = chartData[machine].pie;

    const labels = pickedData.map(label => {
      const title = label._id.replace("_", " ");
      return `${startCase(title)}`;
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
      <div style={{ marginBottom: theme.spacing(1) }}>
        <Doughnut data={data} />
        <Typography
          variant="h6"
          component="h6"
          align="center"
          className={`${classes.title} ${classes.pieLabel}`}
        >
          {startCase(machine)}
        </Typography>
      </div>
    );
  };

  const submitComment = event => {
    event.preventDefault();
    if (
      comment.message &&
      comment.category &&
      comment.partList &&
      comment.stop
    ) {
      setOpen(false);
      loading(true);
      handleSubmitComment(comment)
        .then(() => {
          loading(false);
          resetComment();
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
          setOpen(true);
          console.error(error);
        });
    }
  };

  const renderCommentCategory = () => {
    return (
      <FormControl variant="outlined" className={classes.fullWidth}>
        <InputLabel ref={inputLabel} htmlFor="category">
          Select Category
        </InputLabel>
        <Select
          value={comment.category}
          onChange={handleChange("category")}
          input={
            <OutlinedInput labelWidth={110} name="category" id="category" />
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  };

  const renderPartList = () => {
    return (
      <FormControl variant="outlined" className={classes.fullWidth}>
        <InputLabel ref={inputLabel} htmlFor="part_list">
          Select Part List
        </InputLabel>
        <Select
          value={comment.partList}
          onChange={handleChange("partList")}
          input={
            <OutlinedInput labelWidth={110} name="part_list" id="part_list" />
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  };

  const renderCommentBody = () => {
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {renderCommentCategory()}
          </Grid>
          <Grid item xs={6}>
            {renderPartList()}
          </Grid>
        </Grid>

        <TextField
          id="stop-comment"
          label="Comment"
          value={comment.message}
          onChange={handleChange("message")}
          className={`${classes.commentField} ${classes.fullWidth}`}
          margin="normal"
          variant="outlined"
          multiline
          rows={5}
          rowsMax={10}
        />
      </React.Fragment>
    );
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
            className={`${classes.title} ${classes.noBorder}`}
          >
            {startCase(machine)}
          </TableCell>
          {eventData.map((event, index) => (
            <TableCell
              key={index}
              className={`${classes.cell} ${classes.noBorder}`}
              align="center"
            >
              {renderBodyContent(machine, event)}
            </TableCell>
          ))}
        </TableRow>
      );
    });
  };

  const calcWidth = (start, end) => {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    return Math.abs((endDate - startDate) / 1000 / 60 / 60);
  };

  const renderBodyContent = (machine, event) => {
    if (machine === "filler") {
      return (
        <div
          className={classes.status}
          style={{
            backgroundColor: colors[event.stop_name],
            border:
              event.stop_name === "not_stop" &&
              `1px solid ${theme.palette.grey[300]}`,
            minWidth: 50,
            width: calcWidth(event.start_time, event.end_time),
            maxWidth: 350,
            margin: "0 auto"
          }}
          title={`${startCase(event.stop_name)} \n ${new Date(
            event.start_time
          ).toLocaleString()} - ${new Date(event.end_time).toLocaleString()}`}
        >
          {event.stop_name === "not_stop" && (
            <React.Fragment>
              <div
                className={classes.comment}
                onClick={handleClickOpen("stop", event)}
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
      );
    } else if (event.stop_name !== "green_stop") {
      return (
        <div
          className={classes.status}
          style={{
            backgroundColor: colors[event.stop_name],
            border:
              event.stop_name === "not_stop" &&
              `1px solid ${theme.palette.grey[300]}`,
            minWidth: 50,
            width: calcWidth(event.start_time, event.end_time),
            maxWidth: 350,
            margin: "0 auto"
          }}
          title={`${startCase(event.stop_name)} \n ${new Date(
            event.start_time
          ).toLocaleString()} - ${new Date(event.end_time).toLocaleString()}`}
        >
          {event.stop_name === "not_stop" && (
            <React.Fragment>
              <div
                className={classes.comment}
                onClick={handleClickOpen("stop", event)}
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
      );
    } else {
      return null;
    }
  };

  const renderTabHeader = eventData => {
    return eventData.map((event, i) => {
      return (
        <TableCell
          key={i}
          align="center"
          style={{ padding: 5, whiteSpace: "nowrap" }}
        >
          {new Date(event.start_time).getHours()}
          {" - "}
          {new Date(event.end_time).getHours()}
          {/* {new Date(event.start_time).toLocaleTimeString()}
          {" - "}
          {new Date(event.end_time).toLocaleTimeString()} */}
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
      <React.Fragment>
        <Paper className={classes.days}>{renderEventBar()}</Paper>
        <Paper className={`${classes.days} ${classes.pie}`}>
          {renderPieChart()}
        </Paper>
      </React.Fragment>
    );
  };
  return (
    <div className={classes.root}>
      {renderChart()}
      {renderCommentDialog()}
    </div>
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
