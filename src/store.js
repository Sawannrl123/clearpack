import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
let middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").createLogger();

  middleware = [...middleware, logger];

  middleware = applyMiddleware(...middleware);
} else {
  middleware = applyMiddleware(...middleware);
}
export default (initialState = {}) => {
  return createStore(rootReducer, initialState, middleware);
};
