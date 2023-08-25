import {
  API_NAT_SUM_WIDGET_REQ,
  API_NAT_SUM_WIDGET_SUCCESS,
  API_NAT_ZONE_WIDGET,
  API_NAT_MARKET_WIDGET,
  API_TARRITORY_SALES_REQ,
  API_TARRITORY_SALES_SUCCESS,
  SHOW_TOAST,
  API_DEPOT_SALES_PLAN_SUCCESS,
} from "../constant/types";

export const fetchNatSumWidgetReq = () => ({
  type: API_NAT_SUM_WIDGET_REQ,
});

export const fetchNatSumWidgetSuccess = (data) => ({
  type: API_NAT_SUM_WIDGET_SUCCESS,
  payload: data,
});

export const fetchNatZoneWidget = () => ({
  type: API_NAT_ZONE_WIDGET,
});

export const fetchNatMarketWidget = () => ({
  type: API_NAT_MARKET_WIDGET,
});

export const fetchTarritorySalesReq = () => ({
  type: API_TARRITORY_SALES_REQ,
});

export const actionTarritorySales = (payload) => {
  return (dispatch) => {
    dispatch({
      type: API_TARRITORY_SALES_SUCCESS,
      payload,
    });
  };
};

export const actionDepotSalesPlan = (payload) => {
  return (dispatch) => {
    dispatch({
      type: API_DEPOT_SALES_PLAN_SUCCESS,
      payload,
    });
  };
};
