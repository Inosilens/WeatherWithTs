import axios from "axios";
import { WeatherAction, WeatherActionTypes } from "../types/Weather";
import { Dispatch } from "react";
import { API_KEY, BASE_URL, FORECAST_URL } from "../../helpers/constants";

export const fetchWeather = () => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({ type: WeatherActionTypes.FETCH_WEATHER });
      const weather = await axios.get(BASE_URL, {
        params: {
          lat: 56.5,
          lon: 84.9667,
          cnt: 15,
          units: "metric",
          appid: API_KEY,
          lang: `ru`,
        },
      });
      const dailyForecast = await axios.get(FORECAST_URL, {
        params: {
          lat: 56.5,
          lon: 84.9667,
          units: "metric",
          appid: API_KEY,
          lang: `ru`,
          exclude: `hourly`,
        },
      });
      const hourlyForecast = await axios.get(FORECAST_URL, {
        params: {
          lat: 56.5,
          lon: 84.9667,
          units: "metric",
          appid: API_KEY,
          lang: `ru`,
          exclude: `daily`,
        },
      });
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
        payload: weather.data.list,
      });
      dispatch({
        type: WeatherActionTypes.FETCH_DAILY_FORECAST,
        payload: dailyForecast.data.daily,
      });
      dispatch({
        type: WeatherActionTypes.FETCH_HOURLY_FORECAST,
        payload: hourlyForecast.data.hourly,
      });
      dispatch({
        type: WeatherActionTypes.GET_CITY_INFO,
        payload: weather.data.list[0],
      });
    } catch (e) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_ERROR,
        payload: "Произошла ошибка при загрузке погоды",
      });
    }
  };
};
export const getCityInfo = (city: object): WeatherAction => {
  return { type: WeatherActionTypes.GET_CITY_INFO, payload: city };
};
export const getForecast = (lat: number, lon: number) => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    const forecast = await axios.get(FORECAST_URL, {
      params: {
        lat: lat,
        lon: lon,
        units: "metric",
        appid: API_KEY,
        lang: `ru`,
        exclude: `hourly`,
      },
    });
    dispatch({
      type: WeatherActionTypes.FETCH_DAILY_FORECAST,
      payload: forecast.data.daily,
    });
  };
};
export const getHourlyForecast = (lat: number, lon: number) => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    const forecast = await axios.get(FORECAST_URL, {
      params: {
        lat: lat,
        lon: lon,
        units: "metric",
        appid: API_KEY,
        lang: `ru`,
        exclude: `daily`,
      },
    });
    dispatch({
      type: WeatherActionTypes.FETCH_HOURLY_FORECAST,
      payload: forecast.data.hourly,
    });
  };
};
