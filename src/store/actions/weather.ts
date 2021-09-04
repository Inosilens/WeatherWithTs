import axios from "axios";
import { WeatherAction, WeatherActionTypes } from "../types/ListHeader";
import { Dispatch } from "react";
import { API_KEY, BASE_URL } from "../../helpers/constants";

export const fetchWeather = () => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({ type: WeatherActionTypes.FETCH_WEATHER });
      const response = await axios.get(BASE_URL, {
        params: {
          lat: 56.5,
          lon: 84.9667,
          cnt: 15,
          units: "metric",
          appid: API_KEY,
        },
      });
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
        payload: response.data.list,
      })
      dispatch({type:WeatherActionTypes.GET_CITY_INFO,
      payload:response.data.list[0]});
    } catch (e) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_ERROR,
        payload: "Произошла ошибка при загрузке погоды",
      });
    }
  };
};

export const getCityInfo = (city:object):WeatherAction=>{
  return {type:WeatherActionTypes.GET_CITY_INFO,
  payload:city}
}
