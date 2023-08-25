import {
  API_DEPOT_SALES_PLAN_SUCCESS,
  API_TARRITORY_SALES_SUCCESS,
} from "../constant/types";

const initialState = { territoryData: [], depotSalesPlanData: [] };

const nationalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case API_TARRITORY_SALES_SUCCESS:
      return {
        ...state,
        territoryData: payload,
      };

    case API_DEPOT_SALES_PLAN_SUCCESS:
      return {
        ...state,
        depotSalesPlanData: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default nationalReducer;
