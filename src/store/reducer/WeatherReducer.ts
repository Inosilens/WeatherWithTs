import {
  WeatherAction,
  WeatherActionTypes,
  WeatherList,
} from "../types/Weather";

const defaultState: WeatherList = {
  list: [],
  forecast: [],
  loading: false,
  error: null,
  cityInfo: {
    name: "string",
    coord: { lat: 0, lan: 0 },
    main: { temp_min: 0, temp_max: 0, temp: 0, feels_Like: 0 },
    wind: { speed: 0 },
    rain: null,
    snow: null,
    weather: [],
  },
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
    case WeatherActionTypes.GET_CITY_INFO:
      return { ...state, cityInfo: action.payload };
    case WeatherActionTypes.FETCH_FORECAST:
      return { ...state, forecast: action.payload };

    default:
      return state;
  }
};
