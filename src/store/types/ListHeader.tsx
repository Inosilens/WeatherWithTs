export interface WeatherList {
    list: any[];
    loading: boolean;
    error: null | string;
}

export enum WeatherActionTypes {
    FETCH_WEATHER= 'FETCH_WEATHER',
    FETCH_WEATHER_SUCCESS= 'FETCH_WEATHER_SUCCESS',
    FETCH_WEATHER_ERROR= 'FETCH_WEATHER_ERROR',

}
interface FetchWeatherAction {
    type: WeatherActionTypes.FETCH_WEATHER
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
  | FetchWeatherErrorAction;
