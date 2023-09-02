import { IS_AUTHENTICATED, AUTH_DATA, SELECTED_ZONE } from "../constant/types";

export const setIsAuth = (flag) => {
  return (dispatch) => {
    dispatch({ type: IS_AUTHENTICATED, payload: flag });
  };
};

export const setAuthData = (flag) => {
  return (dispatch) => {
    dispatch({ type: AUTH_DATA, payload: flag });
  };
};

export const setZoneSelection = (payload) => {
  console.log("---setZoneSelection", payload);
  return (dispatch) => {
    dispatch({ type: SELECTED_ZONE, payload: payload });
  };
};
