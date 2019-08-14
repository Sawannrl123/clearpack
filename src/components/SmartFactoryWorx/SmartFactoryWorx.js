import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { SiteContainer, StatusReport } from "../../components";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white
  },
  divider: {
    backgroundColor: theme.palette.common.white
  },
  spacing: {
    padding: theme.spacing(1)
  },
  matchHeight: {
    height: "calc(100vh - 140px)",
    overflow: "auto"
  },
  innerHeight: {
    height: "50%",
    overflow: "auto"
  }
}));

const SmartFactoryWorx = props => {
  const classes = useStyles();
  const theme = useTheme();

  console.log(props);

  /*const data = {
    title: "Modal Testing",
    body: "This is a dummy modal"
  };*/
  return (
    <React.Fragment>
      {props.appData !== null ? (
        <SiteContainer backgroundColor={theme.palette.grey[900]}>
          <div className={classes.root}>
            <Typography
              variant="h6"
              color="inherit"
              align="center"
              className={classes.spacing}
            >
              Mundra 5I/2I - 5000ml
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <div className={classes.matchHeight}>
                  <div className={classes.innerHeight}>sawan </div>
                  <div className={classes.innerHeight}>nirala </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={4}>
                <div className={classes.matchHeight}>
                  <StatusReport />
                </div>
              </Grid>
            </Grid>
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

export default SmartFactoryWorx;
