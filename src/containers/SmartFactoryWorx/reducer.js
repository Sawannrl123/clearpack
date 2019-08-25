import { Data } from "./data";
import * as actions from "./actionTypes";

const currentDate = new Date().toLocaleDateString("en-US");
const currentDayStartTime = new Date(`${currentDate}, 7:00:00`);

const initialState = {
  data: Data,
  shiftData: {
    index: 0,
    value: Data.setting.Analysis[0]
  },
  date: {
    From: currentDayStartTime,
    To: new Date()
  },
  User: "Admin",
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
    case actions.HANDLE_TABLE_VIEW_CHANGE:
      return {
        ...state,
        tableView: action.view
      };
    default:
      return state;
  }
};
