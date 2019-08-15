import {
  HANDLE_CHANGE_ITEM,
  HANDLE_DATE_CHANGE,
  HANDLE_CHART_VIEW_CHANGE,
  HANDLE_TABLE_VIEW_CHANGE,
  HANDLE_DAY_CHANGE
} from "./actionTypes";

export const handleChangeItem = (index, value) => dispatch => {
  dispatch({ type: HANDLE_CHANGE_ITEM, index, value });
};

export const handleDateChange = (key, date) => dispatch => {
  dispatch({ type: HANDLE_DATE_CHANGE, key, date });
};

export const handleChartViewChange = view => dispatch => {
  dispatch({ type: HANDLE_CHART_VIEW_CHANGE, view });
};

export const handleTableViewChange = view => dispatch => {
  dispatch({ type: HANDLE_TABLE_VIEW_CHANGE, view });
};

export const handleDayChange = day => dispatch => {
  dispatch({ type: HANDLE_DAY_CHANGE, day });
};