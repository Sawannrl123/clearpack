import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ConfigChip, Clock } from "../../components";

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      position: "relative"
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
    dateTimePicker: {
      "& .MuiInput-underline": {
        "&:after": {
          display: "none"
        },
        "&:before": {
          display: "none"
        },
        "& input": {
          padding: "10px 16px",
          width: 100
        }
      }
    }
  };
});

const Settings = ({ data, handleDateChange, handleChangeItem }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index, value) => {
    handleChangeItem(index, value);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderDateTime = key => {
    const selectedDate = data.date[key];

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          value={selectedDate}
          onChange={date => handleDateChange(key, date)}
          format="yyyy/MM/dd hh:mm a"
          showTodayButton
          className={classes.dateTimePicker}
          allowKeyboardControl
          inputVariant="standard"
        />
      </MuiPickersUtilsProvider>
    );
  };

  const renderSettingDropdown = item => {
    const selectedItem = data.shiftData;
    return (
      <div className={classes.setting}>
        <List
          component="nav"
          aria-label="analysis-setting"
          className={classes.list}
        >
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="select-analysis"
            aria-label="When analysis is selected"
            onClick={handleClickListItem}
            className={classes.listItem}
          >
            <ListItemText
              primary={selectedItem.value}
              className={classes.itemText}
            />
          </ListItem>
        </List>
        <Menu
          id="select-analysis"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {item.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedItem.index}
              onClick={event => handleMenuItemClick(event, index, option)}
              style={{ fontSize: theme.typography.pxToRem(12) }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      {Object.keys(data.data.setting).map((item, index) => {
        if (data.data.setting[item] === undefined) {
          return (
            <ConfigChip
              key={index}
              title={item}
              titleBg={theme.palette.primary.dark}
            >
              <Clock />
            </ConfigChip>
          );
        } else if (
          typeof data.data.setting[item] === "object" &&
          data.data.setting[item] !== null
        ) {
          return (
            <ConfigChip
              key={index}
              title={item}
              titleBg={theme.palette.primary.dark}
              noSpacing
            >
              {renderSettingDropdown(data.data.setting[item])}
            </ConfigChip>
          );
        }
        if (data.data.setting[item] === null) {
          return (
            <ConfigChip
              key={index}
              title={item}
              titleBg={theme.palette.primary.dark}
              noSpacing
            >
              {renderDateTime(item)}
            </ConfigChip>
          );
        }
        return (
          <ConfigChip
            key={index}
            title={item}
            titleBg={theme.palette.primary.dark}
          >
            {data.data.setting[item]}
          </ConfigChip>
        );
      })}
    </div>
  );
};

export default Settings;
