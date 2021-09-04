export interface Panagination {
  currentPage: number;
}

export enum PanaginationActionsType {

  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
}

interface SetCurrentPage {
  type: PanaginationActionsType.SET_CURRENT_PAGE;
  payload: number;
}
export type PanaginationAction =  | SetCurrentPage;
