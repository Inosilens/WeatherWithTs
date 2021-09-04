import { Dispatch } from "react";
import {
  PanaginationAction,
  PanaginationActionsType,
} from "../types/Panagination";

export const panaginationActions = (num: number) => {
  return (dispatch: Dispatch<PanaginationAction>) => {
    dispatch({ type: PanaginationActionsType.SET_CURRENT_PAGE, payload: num });
  };
};
