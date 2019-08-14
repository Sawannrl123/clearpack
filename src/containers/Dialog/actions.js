import { HANDLE_DIALOG_TOGGLE } from "./actionTypes";

export const handleDialogToggle = (open, data) => dispatch => {
  dispatch({ type: HANDLE_DIALOG_TOGGLE, open, data });
};
