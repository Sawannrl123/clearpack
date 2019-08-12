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
  view: "Event bar"
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
    default:
      return state;
  }
};
