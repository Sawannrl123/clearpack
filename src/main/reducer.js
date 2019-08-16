import * as actions from "./actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  success: null,
  appData: null,
  stopData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING:
      return {
        ...state,
        isLoading: action.loading ? action.loading : !state.isLoading
      };
    case actions.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        success: initialState.success
      };
    case actions.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: initialState.error,
        success: action.success
      };
    case actions.FETCHED_DATA:
      return {
        ...state,
        appData: {
          ...state.appData,
          ...action.appData
        }
      };
    case actions.FETCHED_STOP_DATA:
      return {
        ...state,
        stopData: {
          ...state.stopData,
          ...action.stopVal
        }
      };
    default:
      return state;
  }
};
