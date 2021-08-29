import axios from "axios";
import {WeatherAction, WeatherActionTypes} from "../types/ListHeader";
import {Dispatch} from "react";
import {API_KEY} from "../../helpers/constants";

    export const fetchWeather = () => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER})
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=56.5&lon=84.9667&cnt=15&appid=`+API_KEY
            )
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: response.data.list})
        } catch (e) {
            dispatch({
                type: WeatherActionTypes.FETCH_WEATHER_ERROR,
                payload: 'Произошла ошибка при загрузке погоды'
            })
        }
    }
}