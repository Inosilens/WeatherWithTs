interface ICoord {
  lat: number;
  lon: number;
}

interface IWind {
  speed: number;
}
interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}
export interface ICityInfo {
  name: string;
  coord: ICoord;
  main: IMain;
  wind: IWind;
  rain: null | number;
  snow: null | number;
  weather: any[];
}
export interface IWeatherList {
  currentPage : number,
  list: any[];
  loading: boolean;
  error: null | string;
  cityInfo: ICityInfo;
  dailyForecast: any;
  hourlyForecast: any;
}

export enum WeatherActionTypes {
  FETCH_WEATHER = "FETCH_WEATHER",
  FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS",
  FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR",
  GET_CITY_INFO = "GET_CITY_INFO",
  FETCH_DAILY_FORECAST = "FETCH_DAILY_FORECAST",
  FETCH_HOURLY_FORECAST = "FETCH_HOURLY_FORECAST",
}
interface FetchDailyForecastAction {
  type: WeatherActionTypes.FETCH_DAILY_FORECAST;
  payload: any;
}
interface FetchHourlyForecastAction {
  type: WeatherActionTypes.FETCH_HOURLY_FORECAST;
  payload: any;
}
interface GetCityInfoAction {
  type: WeatherActionTypes.GET_CITY_INFO;
  payload: any;
}
interface FetchWeatherAction {
  type: WeatherActionTypes.FETCH_WEATHER;
}
interface FetchWeatherSuccessAction {
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
  payload: any[];
}
interface FetchWeatherErrorAction {
  type: WeatherActionTypes.FETCH_WEATHER_ERROR;
  payload: string;
}

export type WeatherAction =
  | FetchWeatherAction
  | FetchWeatherSuccessAction
  | FetchWeatherErrorAction
  | GetCityInfoAction
  | FetchDailyForecastAction
  | FetchHourlyForecastAction;
