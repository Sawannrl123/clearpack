import * as actions from "./actionTypes";

const initialState = {
  open: false,
  data: {
    title: "Dialog",
    body: "This is a modal",
    action: null
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.HANDLE_DIALOG_TOGGLE:
      return {
        open: action.open ? action.open : !state.open,
        data: action.data ? action.data : initialState.data
      };
    default:
      return state;
  }
};
