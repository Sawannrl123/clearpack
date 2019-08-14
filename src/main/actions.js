import { LOADING, ERROR, SUCCESS, FETCHED_DATA } from "./actionTypes";

export const loading = loading => dispatch => {
  dispatch({ type: LOADING, loading });
};

export const success = success => dispatch => {
  dispatch({ type: SUCCESS, success });
};

export const error = error => dispatch => {
  dispatch({ type: ERROR, error });
};

export const fetchedData = appData => dispatch => {
  dispatch({ type: FETCHED_DATA, appData });
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
    { name: "labeller", url: REACT_APP_LABELLER_API },
    { name: "shrink", url: REACT_APP_SHRINK_API },
    { name: "induction", url: REACT_APP_INDUCTION_API },
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
      dispatch({ type: ERROR, error });
    });
};

export const parseData = async (data, dispatch) => {
  const parsedData = {};
  let machineName = null;
  await data.map(item => {
    if (item && item.hasOwnProperty("shift")) {
      parsedData[item.machine] = item;
    }
    if (
      item &&
      item.hasOwnProperty("machine_name") &&
      parsedData.hasOwnProperty(item.machine_name)
    ) {
      parsedData[item.machine_name]["sku"] = item;
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
          if (value.hasOwnProperty("active_alarm")) {
            parsedData[machineName]["alarm"] = value;
          } else {
            parsedData[machineName]["fault"] = {
              ...parsedData[machineName]["fault"],
              ...value
            };
          }
        }
        return value;
      });
    }
    return item;
  });
  return await fetchStopData(parsedData, dispatch);
};

export const fetchStopData = (appData, dispatch) => {
  const { REACT_APP_EVENT_BAR_API, REACT_APP_PIE_CHART_API } = process.env;
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

  //const currentDateTime = new Date().toISOString();

  Promise.all(
    skuData.map(async machine => {
      return APIS.map(async api => {
        /*const url = `${api.url}/?startTime=${
          appData[machine].sku.sku_start_time
        }&endTime=${currentDateTime}`;*/
        return await fetch(
          `${api.url}/?startTime=2019-8-5T7:00:00&endTime=2019-8-7T12:00:00`
        )
          .then(result => result.json())
          .then(data => {
            appData[machine][api.name] = data;
            return appData;
          })
          .catch(err => console.error(err));
      });
    })
  );

  dispatch({ type: FETCHED_DATA, appData });
};
