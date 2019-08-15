import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
//import { useTheme } from "@material-ui/styles";
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
  //const theme = useTheme();
  const data = [
    {
      name: "OEE",
      value: statusData.oee
    },
    {
      name: "Bottle Loss",
      value: statusData.bottle_loss
    },
    {
      name: "Aviability",
      value: statusData.aviability
    },
    {
      name: "No. of Stop",
      value: statusData.no_of_stop
    },
    {
      name: "Performance",
      value: statusData.performance
    },
    {
      name: "Rejected Quantity",
      value: statusData.rejected_quantity
    },
    {
      name: "Quality",
      value: statusData.quality
    },
    {
      name: "Time Loss",
      value: statusData.time_loss
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
              {parseFloat(item.value).toFixed(2)}
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
