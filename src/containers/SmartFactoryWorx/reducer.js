import { Data } from "./data";
import * as actions from "./actionTypes";

const initialState = {
  data: Data,
  shiftData: {
    index: 0,
    value: Data.setting.Analysis[0]
  },
  date: {
    From: new Date(),
    To: new Date()
  },
  User: "Admin",
  chartView: "event",
  selectedDay: {
    index: 0,
    value: new Date().toLocaleDateString()
  },
  tableView: "count_wise"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.HANDLE_CHANGE_ITEM:
      return {
        ...state,
        shiftData: {
          index: action.index,
          value: action.value
        }
      };
    case actions.HANDLE_DATE_CHANGE:
      return {
        ...state,
        date: {
          ...state.date,
          [action.key]: action.date
        }
      };
    case actions.HANDLE_CHART_VIEW_CHANGE:
      return {
        ...state,
        chartView: action.view
      };
    case actions.HANDLE_TABLE_VIEW_CHANGE:
      return {
        ...state,
        tableView: action.view
      };
    case actions.HANDLE_DAY_CHANGE:
      return {
        ...state,
        selectedDay: action.day
      };
    default:
      return state;
  }
};
