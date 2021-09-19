import { weatherReducer } from "./reducer/WeatherReducer";
import {  combineReducers } from "redux";
import { PanaginationReducer } from "./reducer/PanagintaionReducer";
import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../pages/auth/Auth-slice"


const rootReducer = combineReducers({
  weather: weatherReducer,
  panagination: PanaginationReducer,
  auth : authSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer : rootReducer
})

