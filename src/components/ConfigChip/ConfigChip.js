import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(2, 1)
  },
  title: {
    padding: theme.spacing(1, 2),
    backgroundColor: props => props.titleBg,
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1.5
  },
  data: {
    padding: props => !props.noSpacing && theme.spacing(1, 2),
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1.5,
    "& *": {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.5
    }
  }
}));

const ConfigChip = ({ title, titleBg, noSpacing, children }) => {
  const classes = useStyles({ titleBg, noSpacing });
  return (
    <Paper className={classes.root}>
      <Typography variant="body1" component="p" className={classes.title}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        className={classes.data}
        noWrap
      >
        {children}
      </Typography>
    </Paper>
  );
};

ConfigChip.propTypes = {
  title: PropTypes.string.isRequired,
  titleBg: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  noSpacing: PropTypes.bool.isRequired
};

ConfigChip.defaultProps = {
  title: "Title",
  children: "Data",
  titleBg: "#fff",
  noSpacing: false
};

export default ConfigChip;
