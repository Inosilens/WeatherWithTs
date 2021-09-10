import { weatherReducer } from "./reducer/WeatherReducer";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { PanaginationReducer } from "./reducer/PanagintaionReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  panagination: PanaginationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
