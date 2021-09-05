import {
  WeatherAction,
  WeatherActionTypes,
  WeatherList,
} from "../types/Weather";

const defaultState: WeatherList = {
  list: [],
  dailyForecast: [],
  hourlyForecast: [],
  loading: false,
  error: null,
  cityInfo: {
    name: "",
    coord: { lat: 0, lon: 0 },
    main: { temp_min: 0, temp_max: 0, temp: 0, feels_like: 0 },
    wind: { speed: 0 },
    rain: null,
    snow: null,
    weather: [{ id: 0, main: "", description: "", icon: "" }],
  },
};

export const weatherReducer = (
  state: WeatherList = defaultState,
  action: WeatherAction
): WeatherList => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER:
      return { ...state, loading: true };
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case WeatherActionTypes.FETCH_WEATHER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case WeatherActionTypes.GET_CITY_INFO:
      return { ...state, cityInfo: action.payload };
    case WeatherActionTypes.FETCH_DAILY_FORECAST:
      return { ...state, dailyForecast: action.payload };
    case WeatherActionTypes.FETCH_HOURLY_FORECAST:
      return { ...state, hourlyForecast: action.payload };
    default:
      return state;
  }
};
