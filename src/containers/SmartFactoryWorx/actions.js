import {
  HANDLE_CHANGE_ITEM,
  HANDLE_DATE_CHANGE,
  HANDLE_CHART_VIEW_CHANGE,
  HANDLE_TABLE_VIEW_CHANGE,
  HANDLE_DAY_CHANGE,
  HANDLE_REQUEST_VIDEO,
  HANDLE_SUBMIT_COMMENT
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

export const handleSubmitComment = data => dispatch => {
  dispatch({ type: HANDLE_SUBMIT_COMMENT, data });
};

export const handleRequestVideo = data => dispatch => {
  dispatch({ type: HANDLE_REQUEST_VIDEO, data });

  const url = `${process.env.REACT_APP_VIDEO_API}/stop_${data.start_time
    .split("+")[0]
    .replace(/[^0-9]/g, "")}`;

  fetch(url)
    .then(result => result.json())
    .then(video => console.log(video))
    .catch(error => console.error(error));
};
