import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    height: "100%",
    backgroundColor: theme.palette.grey[800],
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexWrap: "wrap",
      padding: 0
    }
  },
  status: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1)
    }
  },
  name: {
    fontSize: 13
  },
  value: {
    fontSize: 15,
    fontWeight: 600
  }
}));

const StatusReport = ({ statusData }) => {
  const classes = useStyles();
  const data = [
    {
      name: "OEE",
      value: `${parseFloat(statusData.oee)
        .toFixed(2)
        .toString()
        .replace(".00", "")}%`
    },
    {
      name: "Bottle Loss",
      value: parseInt(statusData.bottle_loss)
    },
    {
      name: "Availability",
      value: `${parseFloat(statusData.aviability)
        .toFixed(2)
        .toString()
        .replace(".00", "")}%`
    },
    {
      name: "No. of Stop",
      value: parseInt(statusData.no_of_stop)
    },
    {
      name: "Performance",
      value: `${parseFloat(statusData.performance)
        .toFixed(2)
        .toString()
        .replace(".00", "")}%`
    },
    {
      name: "Rejected Quantity",
      value: parseInt(statusData.rejected_quantity)
    },
    {
      name: "Quality",
      value: `${parseFloat(statusData.quality)
        .toFixed(2)
        .toString()
        .replace(".00", "")}%`
    },
    {
      name: "Time Loss",
      value: parseFloat(statusData.time_loss)
        .toFixed(2)
        .toString()
        .replace(".", ":")
    },
    {
      name: "Total Quantity",
      value: parseFloat(statusData.total_count)
    }
  ];
  const statusReport = () => {
    return data.map((item, index) => {
      return (
        <Paper className={classes.status} key={index}>
          <Typography
            variant="h6"
            component="h6"
            align="center"
            className={classes.name}
            noWrap
          >
            {item.name}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            align="center"
            className={classes.value}
          >
            {item.value}
          </Typography>
        </Paper>
      );
    });
  };

  return (
    <Paper className={classes.root} elevation={5}>
      {statusReport()}
    </Paper>
  );
};

StatusReport.propTypes = {
  data: PropTypes.object.isRequired
};

StatusReport.defaultProps = {
  data: {}
};

export default StatusReport;
