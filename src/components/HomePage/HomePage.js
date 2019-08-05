import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { SiteContainer, ConfigChip } from "../../components";
import { Data } from "../../data";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(5)
  },
  config: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: theme.spacing(3)
  },
  setting: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  list: {
    padding: 0
  },
  listItem: {
    padding: 0
  },
  itemText: {
    margin: theme.spacing(1, 2)
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: theme.customColor.lightBlue.main
  },
  table: {
    padding: theme.spacing(2)
  },
  verticalTabs: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(0, 3),
    justifyContent: "center",
    height: "100%"
  },
  horizontalTabs: {
    marginBottom: theme.spacing(2)
  }
}));

const StyledTable = withStyles(theme => ({
  root: {
    borderWidth: 1,
    borderColor: theme.palette.divider,
    borderStyle: "solid"
  }
}))(Table);

const StyledTableCell = withStyles(theme => ({
  head: {
    "&:not(:last-child)": {
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 1,
      borderColor: theme.palette.divider,
      borderStyle: "solid"
    }
  },
  body: {
    "&:not(:last-child)": {
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 1,
      borderColor: theme.palette.divider,
      borderStyle: "solid"
    }
  }
}))(TableCell);

const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState({
    "Analysis based on": false,
    "Selected Period": false
  });
  const [anchorEl, setAnchorEl] = React.useState({
    "Analysis based on": null,
    "Selected Period": null
  });
  const [selectedSetting, setSetting] = React.useState({
    "Analysis based on": {
      index: 0,
      value: "Current Shift"
    },
    "Selected Period": {
      index: 0,
      value: "Last one week"
    }
  });
  const [selectedOption, setOption] = React.useState("Alarms");
  const [selectedShift, setShift] = React.useState("Shift");

  const parsedData =
    Data.data[selectedSetting["Analysis based on"].value].data[
      selectedSetting["Selected Period"].value
    ][selectedOption][selectedShift];

  const handleClickListItem = (event, key) => {
    handleopen(key);
    setAnchorEl({
      ...anchorEl,
      [key]: event.currentTarget
    });
  };

  const handleMenuItemClick = (event, index, key, option) => {
    event.persist();
    setOption("Alarms");
    setShift("Shift");
    setSetting({
      ...selectedSetting,
      [key]: {
        index,
        value: option
      }
    });
    handleClose(key);
  };

  const handleopen = key => {
    setOpen({
      [key]: true
    });
  };

  const handleClose = key => {
    setOpen({
      [key]: false
    });
  };

  const renderSettingDropdown = (item, key) => (
    <div className={classes.setting}>
      <List component="nav" aria-label={`nav${key}`} className={classes.list}>
        <ListItem
          button
          aria-haspopup="true"
          aria-controls={key}
          aria-label={item[selectedSetting[key].index]}
          onClick={event => handleClickListItem(event, key)}
          className={classes.listItem}
        >
          <ListItemText
            primary={item[selectedSetting[key].index]}
            className={classes.itemText}
          />
        </ListItem>
      </List>
      <Menu
        id={key}
        anchorEl={anchorEl[key]}
        keepMounted
        open={open[key]}
        onClose={() => handleClose(key)}
      >
        {item.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedSetting[key].index}
            onClick={event => handleMenuItemClick(event, index, key, option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );

  const renderSettings = () => {
    const colors = [
      theme.customColor.lightBlue.main,
      theme.customColor.yellow.main,
      theme.customColor.red.main,
      theme.customColor.green.main,
      theme.palette.grey["A700"]
    ];
    return Object.keys(Data.setting).map((item, index) => {
      if (typeof Data.setting[item] === "object") {
        return (
          <ConfigChip
            key={index}
            title={item}
            titleBg={colors[index]}
            noSpacing
          >
            {renderSettingDropdown(Data.setting[item], item)}
          </ConfigChip>
        );
      }
      return (
        <ConfigChip key={index} title={item} titleBg={colors[index]}>
          {Data.setting[item]}
        </ConfigChip>
      );
    });
  };

  const renderBarChart = () => {
    const pickedData = parsedData["Bar Chart"];
    const labels = Object.keys(pickedData);
    const values = labels.map(value => pickedData[value]);
    const data = {
      labels,
      datasets: [
        {
          label: "Clearpack",
          backgroundColor: theme.palette.primary.light,
          borderColor: theme.palette.primary.dark,
          borderSkipped: false,
          borderWidth: 1,
          hoverBackgroundColor: theme.palette.primary.main,
          hoverBorderColor: theme.palette.primary.dark,
          data: values
        }
      ]
    };
    return (
      <Bar
        data={data}
        width={100}
        height={400}
        options={{
          maintainAspectRatio: false
        }}
      />
    );
  };

  const renderLineChart = () => {
    const pickedData = parsedData["Line Chart"];
    const labels = Object.keys(pickedData.data);
    const values = labels.map(value => pickedData.data[value]);
    const data = {
      labels,
      datasets: [
        {
          label: pickedData.label,
          fill: false,
          lineTension: 0.1,
          backgroundColor: theme.palette.primary.light,
          borderColor: theme.palette.primary.main,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: theme.palette.primary.main,
          pointBackgroundColor: theme.palette.common.white,
          pointBorderWidth: 5,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: theme.palette.common.white,
          pointHoverBorderColor: theme.palette.primary.dark,
          pointHoverBorderWidth: 7,
          pointRadius: 5,
          pointHitRadius: 10,
          hoverBorderColor: theme.palette.primary.dark,
          data: values
        }
      ]
    };
    return <Line data={data} height={300} />;
  };

  const renderDoughnutChart = () => {
    const pickedData = parsedData["Event"];
    const labels = Object.keys(pickedData);
    const values = labels.map(value => pickedData[value]);
    const data = {
      labels,
      datasets: [
        {
          backgroundColor: [
            theme.customColor.green.main,
            theme.customColor.lightBlue.main,
            theme.palette.grey["500"],
            theme.customColor.yellow.main,
            theme.customColor.red.main
          ],
          hoverBackgroundColor: [
            theme.customColor.green.dark,
            theme.customColor.lightBlue.dark,
            theme.palette.grey["700"],
            theme.customColor.yellow.dark,
            theme.customColor.red.dark
          ],
          data: values
        }
      ]
    };
    return <Doughnut data={data} />;
  };

  const renderPercentage = () => {
    const pickedData = parsedData["percentage"];
    return (
      <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          {Object.keys(pickedData).map((data, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  className={classes.percentage}
                  style={{ padding: theme.spacing(2) }}
                >
                  <Typography
                    variant="body1"
                    component="p"
                    align="center"
                    style={{ marginBottom: theme.spacing(1) }}
                  >
                    {data}
                  </Typography>
                  <Typography variant="h5" component="h5" align="center">
                    {pickedData[data]}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    );
  };

  const renderTable = () => {
    const pickedData = parsedData["Labeller"];
    const labels = Object.keys(pickedData);
    const values = Object.keys(pickedData[labels[0]]);
    return (
      <React.Fragment>
        <Typography
          variant="h5"
          component="h5"
          style={{ marginBottom: theme.spacing(2) }}
        >
          Labeller
        </Typography>
        <StyledTable size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell key={3} />
              {labels.map((cell, index) => (
                <StyledTableCell align="center" key={index}>
                  {cell}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map((cell, index) => (
              <TableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {cell}
                </StyledTableCell>
                {labels.map((innerCell, index) => (
                  <StyledTableCell align="center" key={index}>
                    {pickedData[innerCell][cell]}
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </React.Fragment>
    );
  };

  const handleOptionTabChange = label => {
    setOption(label);
    setShift("Shift");
  };

  const renderVertivalTabs = () => {
    const parsedData =
      Data.data[selectedSetting["Analysis based on"].value].data[
        selectedSetting["Selected Period"].value
      ];
    const labels = Object.keys(parsedData);
    return (
      <React.Fragment>
        {labels.map((label, index) => (
          <Button
            variant="contained"
            color={label === selectedOption ? "secondary" : "primary"}
            key={index}
            onClick={() => handleOptionTabChange(label)}
            style={{ margin: theme.spacing(1, 0) }}
          >
            {label}
          </Button>
        ))}
      </React.Fragment>
    );
  };

  const renderHorizontalTabs = () => {
    const parsedData =
      Data.data[selectedSetting["Analysis based on"].value].data[
        selectedSetting["Selected Period"].value
      ][selectedOption];
    const labels = Object.keys(parsedData);
    return (
      <React.Fragment>
        {labels.map((label, index) => (
          <Button
            color={label === selectedShift ? "secondary" : "primary"}
            key={index}
            onClick={() => setShift(label)}
          >
            {label}
          </Button>
        ))}
      </React.Fragment>
    );
  };

  return (
    <SiteContainer>
      <div className={classes.root}>
        <div className={classes.config}>{renderSettings()}</div>
        <div className={classes.body}>
          <Grid container className={classes.grid} spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <div className={classes.verticalTabs}>
                      {renderVertivalTabs()}
                    </div>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <div className={classes.horizontalTabs}>
                      {renderHorizontalTabs()}
                    </div>
                    <div className={classes.barChart}>{renderBarChart()}</div>
                  </Grid>
                </Grid>
                <div className={classes.table}>{renderTable()}</div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <div
                className={classes.paper}
                style={{ marginBottom: theme.spacing(2) }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Paper style={{ padding: theme.spacing(1) }}>
                      <div className={classes.lineChart}>
                        {renderLineChart()}
                      </div>
                    </Paper>
                  </Grid>
                  {renderPercentage()}
                </Grid>
              </div>
              <div className={classes.paper}>
                <Paper style={{ padding: theme.spacing(1) }}>
                  <Typography
                    variant="h5"
                    component="h5"
                    align="center"
                    style={{ marginBottom: theme.spacing(2) }}
                  >
                    Event Chart
                  </Typography>
                  <div className={classes.doughnutChart}>
                    {renderDoughnutChart()}
                  </div>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </SiteContainer>
  );
};

export default HomePage;
