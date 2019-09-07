import { LOADING, ERROR, SUCCESS, FETCHED_DATA } from "./actionTypes";

import { getCurrentDate } from "../utils";
import { object } from "prop-types";

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
    REACT_APP_ALL_MACHINE_API,
    REACT_APP_SKU_API,
    REACT_APP_ALARM_API,
    REACT_APP_STOP_API
  } = process.env;

  const APIS = [
    { name: "all", url: REACT_APP_ALL_MACHINE_API },
    { name: "alarm", url: REACT_APP_ALARM_API },
    { name: "sku", url: REACT_APP_SKU_API },
    {
      name: "stop",
      url: `${REACT_APP_STOP_API}?startTime=${getCurrentDate()}T7:00:00&endTime=${getCurrentDate()}T19:00:00`
    }
  ];

  const data = Promise.all(
    APIS.map(async api => {
      return await fetch(api.url)
        .then(result => result.json())
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

const parseData = async (data, dispatch) => {
  const machineData = data[0];
  const alarmData = data[1];
  const skuData = data[2];
  const stopData = data[3];
  let prevItem = null;
  const parsedData = {};

  machineData.map(machine => {
    parsedData[machine.machine] = machine;
    if (prevItem === null) {
      parsedData[machine.machine]["count_difference"] = machine.total_count;
      prevItem = machine;
    } else {
      parsedData[machine.machine][
        "count_difference"
      ] = `${prevItem.total_count - machine.total_count}_${
        machine.total_count
      }`;
      prevItem = machine;
    }
    return parsedData;
  });

  alarmData.map(alarm => {
    if (parsedData.hasOwnProperty(alarm.machine_name)) {
      parsedData[alarm.machine_name]["alarm"] = alarm;
      return parsedData;
    }
    return parsedData;
  });

  skuData.map(sku => {
    if (parsedData.hasOwnProperty(sku.machine_name)) {
      parsedData[sku.machine_name]["sku"] = sku;
      parsedData[sku.machine_name]["target"] = `${sku.target_quanity}/${
        sku.current_count
      }/${parseFloat((sku.current_count / sku.target_quanity) * 100).toFixed(
        2
      )}%`;
      return parsedData;
    }
    return parsedData;
  });

  stopData.map((stop, index) => {
    if (parsedData.hasOwnProperty(stop.machine_name)) {
      parsedData[stop.machine_name]["stop"] = {
        ...parsedData[stop.machine_name]["stop"],
        [index]: stop
      };
      return parsedData;
    }
    return parsedData;
  });

  Object.keys(parsedData).map(machine => {
    const machineStopData = parsedData[machine].stop;
    const faultArray = Object.keys(machineStopData)
      .map(item => machineStopData[item])
      .filter(item => item.machine_name.indexOf("_") !== -1);
    const topFaults = faultArray
      .sort((a, b) => {
        const diffATime =
          new Date(a.end_time).getTime() - new Date(a.start_time).getTime();
        const diffBTime =
          new Date(b.end_time).getTime() - new Date(b.start_time).getTime();
        return diffBTime - diffATime;
      })
      .slice(0, 5);
    parsedData[machine]["topFault"] = topFaults;
  });

  dispatch({ type: FETCHED_DATA, appData: parsedData });
};

export const parseDatas = async (data, dispatch) => {
  /*const parsedData = {};
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
      item.map((value, index) => {
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
        if (
          value &&
          value.hasOwnProperty("machine_name") &&
          parsedData.hasOwnProperty(machineName) &&
          (value.hasOwnProperty("end_time") &&
            value.hasOwnProperty("start_time") &&
            value.hasOwnProperty("stop_name"))
        ) {
          parsedData[machineName]["stops"] = {
            ...parsedData[machineName]["stops"],
            [index]: value
          };
        }
        return value;
      });
    }
    return item;
  });
  dispatch({ type: FETCHED_DATA, appData: parsedData });*/
  console.log("recieved data", data);
};

export const fetchStopData = () => async (dispatch, getState) => {
  // const { REACT_APP_STOP_API } = process.env;
  // const { appData } = getState().Main;
  // const APIS = [
  //   { name: "event", url: REACT_APP_STOP_API },
  //   { name: "pie", url: REACT_APP_PIE_CHART_API }
  // ];
  // const machines = [
  //   "line",
  //   "filler",
  //   "induction",
  //   "labeller",
  //   "shrink",
  //   "packer",
  //   "erector",
  //   "c_weigher",
  //   "c_sealer"
  // ];
  // const currentDateTime = new Date().toISOString().split(".")[0];
  // const currentDate = new Date().toLocaleDateString("en-US");
  // const startTime = new Date(`${currentDate}, 7:00:00`)
  //   .toISOString()
  //   .split(".")[0];
  // let parsedData = {};
  // await Promise.all(
  //   APIS.map(async api => {
  //     //const startTime = appData["filler"].sku.sku_start_time.split(".")[0];
  //     const url = `${api.url}?startTime=${startTime}&endTime=${currentDateTime}`;
  //     return await fetch(url)
  //       .then(result => result.json())
  //       .then(data => {
  //         parsedData = {
  //           ...parsedData,
  //           [api.name]: data
  //         };
  //         return data;
  //       })
  //       .catch(err => console.error(err));
  //   })
  // );
  // setTimeout(() => {
  //   let stopVal = {};
  //   const pieData = parsedData.pie;
  //   const group = groupBy(parsedData.event, "machine_name");
  //   machines.map(
  //     machine =>
  //       (stopVal[machine] = {
  //         pie: parsedData.pie,
  //         event: group[machine] ? group[machine] : group["filler"]
  //       })
  //   );
  //   dispatch({ type: FETCHED_STOP_DATA, stopVal, pieData });
  // }, 3000);
};
