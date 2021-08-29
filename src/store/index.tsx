import { weatherReducer } from "./reducer/WeatherReducer";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
const rootReducer = combineReducers({
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
