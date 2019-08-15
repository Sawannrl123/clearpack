import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    height: "100%",
    backgroundColor: theme.palette.grey[800],
    overflow: "auto"
  },
  status: {
    padding: theme.spacing(2, 1)
  },
  name: {
    fontSize: 15
  },
  value: {
    fontSize: 20,
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
      name: "Aviability",
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
    }
  ];
  const statusReport = () => {
    return data.map((item, index) => {
      return (
        <Grid item xs={index % 2 === 0 ? 5 : 7} key={index}>
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
        </Grid>
      );
    });
  };

  return (
    <Paper className={classes.root} elevation={5}>
      <Grid container spacing={2}>
        {statusReport()}
      </Grid>
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
