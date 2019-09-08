import { LOADING, ERROR, SUCCESS, FETCHED_DATA } from "./actionTypes";
import { groupBy, reduce } from "lodash";
import { getCurrentDate } from "../utils";

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
  const machinesData = data[0] || [];
  const sorting = ["filler", "induction", "labeller", "shrink"];
  const machineData = [];
  machinesData.map(item => {
    const n = sorting.indexOf(item.machine);
    machineData[n] = item;
    return machineData;
  });

  const alarmData = data[1] || [];
  const skuData = data[2] || [];
  const stopData = data[3] || [];
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
    const machineName = stop.machine_name.split("_")[0];
    if (parsedData.hasOwnProperty(machineName)) {
      const startTime = new Date(stop.start_time).getTime();
      const endTime = new Date(stop.end_time).getTime();
      const difference = endTime - startTime;
      stop["duration"] = difference / 1000;
      parsedData[machineName]["stop"] = {
        ...parsedData[machineName]["stop"],
        [index]: stop
      };
      return parsedData;
    }
    return parsedData;
  });

  Object.keys(parsedData).map(machine => {
    const machineStopData = parsedData[machine].stop;

    const fault = Object.keys(machineStopData).map(
      item => machineStopData[item]
    );

    parsedData[machine]["event"] = fault;

    const pie = groupBy(fault, "stop_name");
    parsedData[machine]["pie"] = {};
    Object.keys(pie).map(p => {
      parsedData[machine]["pie"][p] = {
        ...parsedData[machine]["pie"][p],
        [p]: reduce(pie[p], reducePieData, 0)
      };
      return parsedData;
    });

    const filteredFault = fault.filter(
      item => item.machine_name.indexOf("_") !== -1
    );

    const faultGroup = groupBy(filteredFault, "machine_name");

    const topFaults = Object.keys(faultGroup)
      .sort((a, b) => faultGroup[b].length - faultGroup[a].length)
      .map(f => faultGroup[f])
      .slice(0, 5);

    parsedData[machine]["topFault"] = topFaults;

    return parsedData;
  });

  dispatch({ type: FETCHED_DATA, appData: parsedData });
};

const reducePieData = (result, value) => result + value.duration;

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
