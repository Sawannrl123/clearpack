import * as actions from "./actionTypes";

const initialState = {
  chartView: "event"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.HANDLE_CHART_VIEW_CHANGE:
      return {
        ...state,
        chartView: action.view
      };
    default:
      return state;
  }
};
