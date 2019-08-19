import {
  HANDLE_CHART_VIEW_CHANGE,
  HANDLE_REQUEST_VIDEO,
  HANDLE_SUBMIT_COMMENT
} from "./actionTypes";

export const handleChartViewChange = view => dispatch => {
  dispatch({ type: HANDLE_CHART_VIEW_CHANGE, view });
};

export const handleSubmitComment = data => dispatch => {
  dispatch({ type: HANDLE_SUBMIT_COMMENT, data });

  try {
    return new Promise((resolve, reject) => {
      // const url = `${
      //   process.env.REACT_APP_VIDEO_API
      // }/stop_${data.start_time.split("+")[0].replace(/[^0-9]/g, "")}`;

      // fetch(url)
      //   .then(result => result.json())
      //   .then(video => resolve(video))
      //   .catch(error => {
      //     resolve("http://103.205.66.73:443/video/test");
      //     console.error(error);
      //   });
      resolve(true);
    });
  } catch (error) {
    console.error(error);
  }
};

export const handleRequestVideo = data => dispatch => {
  dispatch({ type: HANDLE_REQUEST_VIDEO, data });

  try {
    return new Promise((resolve, reject) => {
      const url = `${
        process.env.REACT_APP_VIDEO_API
      }/stop_${data.start_time.split("+")[0].replace(/[^0-9]/g, "")}`;

      fetch(url)
        .then(result => result.json())
        .then(video => resolve(video))
        .catch(error => {
          resolve("http://103.205.66.73:443/video/test");
          console.error(error);
        });
    });
  } catch (error) {
    console.error(error);
  }
};
