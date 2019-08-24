import {
  LOADING,
  ERROR,
  SUCCESS,
  FETCHED_DATA,
  FETCHED_STOP_DATA
} from "./actionTypes";

export const loading = loading => dispatch => {
  dispatch({ type: LOADING, loading });
};

export const success = success => dispatch => {
  dispatch({ type: SUCCESS, success });
};

export const error = error => dispatch => {
  dispatch({ type: ERROR, error });
};

export const fetchData = () => dispatch => {
  const {
    REACT_APP_FILLER_API,
    REACT_APP_LABELLER_API,
    REACT_APP_SHRINK_API,
    REACT_APP_INDUCTION_API,
    REACT_APP_SKU_API,
    REACT_APP_FAULT_API,
    REACT_APP_ALARM_API
  } = process.env;

  const APIS = [
    { name: "filler", url: REACT_APP_FILLER_API },
    { name: "induction", url: REACT_APP_INDUCTION_API },
    { name: "labeller", url: REACT_APP_LABELLER_API },
    { name: "shrink", url: REACT_APP_SHRINK_API },
    { name: "sku", url: REACT_APP_SKU_API },
    { name: "fault", url: REACT_APP_FAULT_API },
    { name: "alarm", url: REACT_APP_ALARM_API }
  ];

  const data = Promise.all(
    APIS.map(async api => {
      return await fetch(api.url)
        .then(result => result.json())
        .then(data => {
          if (data && data.hasOwnProperty("shift")) {
            data["machine"] = api.name;
          }

          return data;
        })
        .catch(err => console.error(err));
    })
  );

  data
    .then(async appData => {
      await parseData(appData, dispatch);
    })
    .catch(error => {
      console.error(error);
    });
};

export const parseData = async (data, dispatch) => {
  const parsedData = {};
  let machineName = null;
  let prevItem = null;
  await data.map(item => {
    if (item && item.hasOwnProperty("shift")) {
      parsedData[item.machine] = item;
      if (prevItem === null) {
        parsedData[item.machine]["count_difference"] = item.total_count;
        prevItem = item;
      } else {
        parsedData[item.machine]["count_difference"] = `${prevItem.total_count -
          item.total_count}_${item.total_count}`;
        prevItem = item;
      }
    }
    if (
      item &&
      item.hasOwnProperty("machine_name") &&
      parsedData.hasOwnProperty(item.machine_name)
    ) {
      parsedData[item.machine_name]["sku"] = item;
      parsedData[item.machine_name]["target"] = `${item.target_quanity}/${
        item.current_count
      }/${parseFloat((item.current_count / item.target_quanity) * 100).toFixed(
        2
      )}%`;
    }
    if (item && item.length) {
      item.map(value => {
        if (value.hasOwnProperty("machine_name")) {
          machineName = value.machine_name;
        }
        if (
          (value &&
            value.hasOwnProperty("machine_name") &&
            parsedData.hasOwnProperty(machineName)) ||
          value.hasOwnProperty("current_first_fault") ||
          value.hasOwnProperty("count_wise") ||
          value.hasOwnProperty("time_wise")
        ) {
          parsedData[machineName] = {
            ...parsedData[machineName],
            ...value
          };
        }
        return value;
      });
    }
    return item;
  });
  dispatch({ type: FETCHED_DATA, appData: parsedData });
};

export const fetchStopData = () => async (dispatch, getState) => {
  const { REACT_APP_EVENT_BAR_API, REACT_APP_PIE_CHART_API } = process.env;

  const { appData } = getState().Main;

  const APIS = [
    { name: "event", url: REACT_APP_EVENT_BAR_API },
    { name: "pie", url: REACT_APP_PIE_CHART_API }
  ];

  const skuData = Object.keys(appData).filter(machine => {
    if (appData[machine].hasOwnProperty("sku")) {
      return appData[machine].sku;
    }
    return null;
  });

  const machines = [
    "filler",
    "induction",
    "labeller",
    "Shrink",
    "packer",
    "erector",
    "c_weigher",
    "c_sealer"
  ];

  const currentDateTime = new Date().toISOString().split(".")[0];
  let parsedData = {};
  await Promise.all(
    ["filler"].map(async machine => {
      const startTime = appData[machine].sku.sku_start_time.split(".")[0];
      //parsedData[machine] = {};
      return APIS.map(async api => {
        const url = `${api.url}?startTime=${startTime}&endTime=${currentDateTime}`;

        return await fetch(url)
          .then(result => result.json())
          .then(data => {
            /*parsedData[machine] = {
              ...parsedData[machine],
              [api.name]: data
            };*/
            parsedData = {
              ...parsedData,
              [api.name]: data
            };
            return data;
          })
          .catch(err => console.error(err));
      });
    })
  );

  setTimeout(() => {
    let stopVal = {};
    machines.map(machine => (stopVal[machine] = parsedData));
    dispatch({ type: FETCHED_STOP_DATA, stopVal });
  }, 3000);
};
