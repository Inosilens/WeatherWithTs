import {
  WeatherAction,
  WeatherActionTypes,
  WeatherList,
} from "../types/ListHeader";

const defaultState: WeatherList = {
  list: [],
  loading: false,
  error: null,
};

export const weatherReducer = (
  state: WeatherList = defaultState,
  action: WeatherAction
) => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER:
      return { ...state, loading: true };
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case WeatherActionTypes.FETCH_WEATHER_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
