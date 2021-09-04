import {
  Panagination,
  PanaginationAction,
  PanaginationActionsType,
} from "../types/Panagination";

const defaultState: Panagination = {
  currentPage: 1,
};

export const PanaginationReducer = (
  state: Panagination = defaultState,
  action: PanaginationAction
): Panagination => {
  switch (action.type) {
    case PanaginationActionsType.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
