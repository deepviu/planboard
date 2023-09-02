import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import nationalReducer from "./NationalReducer";
import selectionReducer from "./SelectionReducer";

const reducers = combineReducers({
  auth: authReducer,
  national: nationalReducer,
  selectedDrop: selectionReducer,
});

export default reducers;
