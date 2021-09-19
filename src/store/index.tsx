import mainSlice from '../pages/main/Main-slice'
import {  combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../pages/auth/Auth-slice"


const rootReducer = combineReducers({
  main: mainSlice,
  auth : authSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer : rootReducer
})

