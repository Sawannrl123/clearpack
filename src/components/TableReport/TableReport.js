import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useTheme } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
  capitalize: {
    textTransform: "capitalize"
  },
  paper: {
    height: "100%",
    overflow: "auto"
  },
  title: {
    fontSize: 12,
    fontWeight: 500
  },
  data: {
    fontSize: 12
  }
}));

const TableReport = ({ tableData, tableView, handleTableViewChange }) => {
  const classes = useStyles();
  const theme = useTheme();

  const renderButtons = () => (
    <ButtonGroup
      color="primary"
      variant="contained"
      className={classes.buttonGroup}
    >
      <Button
        className={
          tableView === "count_wise"
            ? `${classes.button} active`
            : `${classes.button}`
        }
        onClick={() => handleTableViewChange("count_wise")}
      >
        Count
      </Button>
      <Button
        className={
          tableView === "time_wise"
            ? `${classes.button} active`
            : `${classes.button}`
        }
        onClick={() => handleTableViewChange("time_wise")}
      >
        Time
      </Button>
    </ButtonGroup>
  );

  const renderTableHeader = () => {
    return Object.keys(tableData).map((machine, index) => {
      return (
        <TableCell
          key={index}
          className={classes.capitalize}
          style={{ padding: "10px" }}
        >
          {machine}
        </TableCell>
      );
    });
  };

  const renderTableBody = () => {
    const machineStatus = [
      { key: "batch_no", value: "Batch No" },
      { key: "target", value: "Target/Achieved for Batch" },
      { key: "count_difference", value: "Total count/buffer for Batch" },
      { key: "count_difference", value: "Shift Bottle/Case" },
      { key: "speed", value: "Speed BPM" },
      { key: "no_of_stop", value: "No. of Faults" },
      {
        key: "time_loss",
        value: "Fault Duration Min",
        meta: { showMinute: true }
      },
      { key: "oee", value: "OEE", meta: { showPercentage: true } },
      {
        key: "aviability",
        value: "Avalability",
        meta: { showPercentage: true }
      },
      {
        key: "performance",
        value: "Performance",
        meta: { showPercentage: true }
      },
      { key: "quality", value: "Quality", meta: { showPercentage: true } },
      { key: "condition", value: "Current Status" },
      { key: "current_first_fault", value: "Current First Fault" },
      { key: "active_alarm", value: "Current Active Alarm scroll" }
    ];
    const tableTop = machineStatus.map((status, index) => {
      return (
        <TableRow
          key={index}
          style={{
            backgroundColor:
              index % 2 === 0
                ? theme.palette.common.white
                : theme.palette.grey[200]
          }}
        >
          <TableCell
            key={`machnie_${index}`}
            className={`${classes.capitalize} ${classes.title}`}
          >
            {status.value}
          </TableCell>
          {Object.keys(tableData).map((machine, i) => {
            return (
              <TableCell
                key={i}
                className={`${classes.capitalize} ${classes.data}`}
              >
                {status.meta
                  ? status.meta.showMinute
                    ? tableData[machine][status.key] &&
                      parseFloat(tableData[machine][status.key])
                        .toFixed(2)
                        .toString()
                        .replace(".", ":")
                    : `${parseFloat(tableData[machine][status.key])
                        .toFixed(2)
                        .toString()
                        .replace(".00", "")}%`
                  : tableData[machine][status.key]}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });

    //Finding maximum length of fault array
    let maxFault = 0;
    Object.keys(tableData).map((machine, i) => {
      if (
        tableData[machine].hasOwnProperty("count_wise") &&
        tableData[machine].count_wise.length > maxFault
      ) {
        maxFault = tableData[machine].count_wise.length;
      }
      return null;
    });

    //Creating fault array with maximum length of fault array
    const faultArray = Array.from({ length: maxFault }, (v, i) => i);

    const tableBottom = faultArray.map((fault, index) => {
      return (
        <TableRow
          key={index}
          style={{
            backgroundColor:
              index % 2 === 0
                ? theme.palette.common.white
                : theme.palette.grey[200]
          }}
        >
          <TableCell
            key={`fault_${index}`}
            className={`${classes.capitalize} ${classes.title}`}
          >
            {`Top Fault ${index + 1}`}
          </TableCell>
          {Object.keys(tableData).map((machine, i) => {
            return (
              <TableCell
                key={i}
                className={`${classes.capitalize} ${classes.data}`}
              >
                {renderFaultData(machine, index)}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });

    return [tableTop, tableBottom];
  };

  const renderFaultData = (machine, index) => {
    if (
      tableView === "count_wise" &&
      tableData[machine].hasOwnProperty("count_wise")
    ) {
      return `${tableData[machine].count_wise[index].name} (${
        tableData[machine].count_wise[index].frequency
      })`;
    }

    if (
      tableView === "time_wise" &&
      tableData[machine].hasOwnProperty("time_wise")
    ) {
      return `${tableData[machine].time_wise[index].name} (${
        tableData[machine].time_wise[index].frequency
      })`;
    }

    return null;
  };

  const renderTable = () => {
    return (
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell key="blank"> </TableCell>
              {renderTableHeader()}
            </TableRow>
          </TableHead>
          <TableBody>{renderTableBody()}</TableBody>
        </Table>
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
        {renderTable()}
      </Grid>
    </Grid>
  );
};

TableReport.propTypes = {
  tableData: PropTypes.object.isRequired,
  tableView: PropTypes.string.isRequired,
  handleTableViewChange: PropTypes.func.isRequired
};

TableReport.defaultProps = {
  tableData: {},
  tableView: "count_wise",
  handleTableViewChange: () => {}
};

export default TableReport;
