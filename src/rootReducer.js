import { combineReducers } from "redux";
import SmartFactoryWorx from "./containers/SmartFactoryWorx/reducer";
import Dialog from "./containers/Dialog/reducer";
import Event from "./containers/EventPage/reducer";
import Main from "./main/reducer";

export default combineReducers({
  Main,
  SmartFactoryWorx,
  Dialog,
  Event
});
