import React from "react";
import PropTypes from "prop-types";
import { upperFirst } from "lodash";
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
import Folder from "@material-ui/icons/Folder";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    position: "relative",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 50px)",
      marginLeft: "50px"
    }
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
  },
  headerTitle: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "& > span": {
      paddingLeft: "5px",
      marginTop: "3px",
      lineHeight: 1
    }
  }
}));

const TableReport = ({
  tableData,
  tableView,
  handleTableViewChange,
  handleDialogToggle
}) => {
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

  const openDoc = () => {
    const win = window.open(
      "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
      "_blank"
    );
    win.focus();
  };

  const openDocument = machine => {
    const body = (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sn No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow onClick={openDoc}>
            <TableCell>1.</TableCell>
            <TableCell>Stop</TableCell>
            <TableCell>Video</TableCell>
            <TableCell>4Mb</TableCell>
          </TableRow>
          <TableRow onClick={openDoc}>
            <TableCell>2.</TableCell>
            <TableCell>Stop</TableCell>
            <TableCell>Video</TableCell>
            <TableCell>4Mb</TableCell>
          </TableRow>
          <TableRow onClick={openDoc}>
            <TableCell>3.</TableCell>
            <TableCell>Stop</TableCell>
            <TableCell>Video</TableCell>
            <TableCell>4Mb</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const popUpData = {
      title: `${upperFirst(machine)} machine documents`,
      body,
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
  };

  const renderTableHeader = () => {
    return Object.keys(tableData).map((machine, index) => {
      return (
        <TableCell
          key={index}
          className={classes.capitalize}
          style={{ padding: "10px" }}
        >
          <span
            className={classes.headerTitle}
            onClick={() => openDocument(machine)}
          >
            <Folder /> <span>{machine}</span>
          </span>
        </TableCell>
      );
    });
  };

  const renderAlarmData = alarmData => {
    if (alarmData && alarmData.length) {
      return alarmData[0];
    }
    return null;
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
                  : status.key === "active_alarm"
                  ? renderAlarmData(tableData[machine][status.key])
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

    const tableMid = faultArray.map((fault, index) => {
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

    const bottomArray = [
      { key: "mrbf", value: "MTBF" },
      { key: "mttr", value: "MTTR" }
    ];

    const tableBottom = bottomArray.map((status, index) => {
      return (
        <TableRow
          key={index}
          style={{
            backgroundColor:
              index % 2 === 0
                ? theme.palette.grey[200]
                : theme.palette.common.white
          }}
        >
          <TableCell
            key={`status_${index}`}
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
                {tableData[machine][status.key]}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });

    return [tableTop, tableMid, tableBottom];
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
    <div className={classes.root}>
      {renderButtons()}
      {renderTable()}
    </div>
  );
};

TableReport.propTypes = {
  tableData: PropTypes.object.isRequired,
  tableView: PropTypes.string.isRequired,
  handleTableViewChange: PropTypes.func.isRequired,
  handleDialogToggle: PropTypes.func.isRequired
};

TableReport.defaultProps = {
  tableData: {},
  tableView: "count_wise",
  handleTableViewChange: () => {},
  handleDialogToggle: () => {}
};

export default TableReport;
