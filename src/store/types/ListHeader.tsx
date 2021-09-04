interface Coord {
  lat: number;
  lan: number;
}

interface Wind {
  speed: number;
}
interface Main {
  temp: number;
  feels_Like: number;
  temp_min: number;
  temp_max: number;
}
interface CityInfo {
  name: string;
  coord: Coord;
  main: Main;
  wind: Wind;
  rain: null | number;
  snow: null | number;
  weather: [];
}
export interface WeatherList {
  list: any[];
  loading: boolean;
  error: null | string;
  cityInfo: CityInfo;
}

export enum WeatherActionTypes {
  FETCH_WEATHER = "FETCH_WEATHER",
  FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS",
  FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR",
  GET_CITY_INFO = "GET_CITY_INFO",
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
  | GetCityInfoAction;
