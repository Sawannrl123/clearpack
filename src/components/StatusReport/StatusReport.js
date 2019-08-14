import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
//import { useTheme } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 1)
  }
}));

const StatusReport = ({ data }) => {
  const classes = useStyles();
  //const theme = useTheme();

  const statusReport = () => {
    return data.map((item, index) => {
      return (
        <Grid item xs={index % 2 === 0 ? 7 : 5}>
          <Paper className={classes.root} key={index}>
            <Typography variant="h6" component="h6">
              {item.name}
            </Typography>
            <Typography variant="body" component="p">
              {item.value}
            </Typography>
          </Paper>
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={2}>
      {statusReport()}
    </Grid>
  );
};

StatusReport.propTypes = {
  data: PropTypes.array.isRequired
};

StatusReport.defaultProps = {
  data: []
};

export default StatusReport;
