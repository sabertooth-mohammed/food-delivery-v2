import { combineReducers } from "redux";
import authReducer from "./Login/authReducer";
// import reportsReducer from "./Reports/reportsReducer";

export default (rootReducer = combineReducers({
  login: authReducer,
  // reports:reportsReducer,
  // sendSms:sendSmsReducer
}));
