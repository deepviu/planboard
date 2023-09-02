import { SELECTED_ZONE } from "../constant/types";

const initialState = {
  SelectedZone: {},
  SelectedDepot: {},
  SelectedTerritory: {},
};

const selectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ZONE:
      return {
        ...state,
        SelectedZone: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default selectionReducer;
