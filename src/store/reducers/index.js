import { combineReducers } from "redux";
import authReducer from "./AuthReducer";


const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;
