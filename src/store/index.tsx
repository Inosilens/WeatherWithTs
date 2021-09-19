import mainSlice from '../pages/main/main-slice'
import {  combineReducers } from "redux";
import { PanaginationReducer } from "./reducer/PanagintaionReducer";
import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../pages/auth/Auth-slice"


const rootReducer = combineReducers({
  main: mainSlice,
  panagination: PanaginationReducer,
  auth : authSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer : rootReducer
})

