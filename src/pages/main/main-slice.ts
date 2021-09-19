import {IWeatherList} from "./types/Weather";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {API_KEY, BASE_URL, FORECAST_URL} from "../../helpers/constants";

const initialState: IWeatherList = {
    list: [],
    dailyForecast: [],
    hourlyForecast: [],
    loading: false,
    error: null,
    cityInfo: {
        name: "",
        coord: {lat: 0, lon: 0},
        main: {temp_min: 0, temp_max: 0, temp: 0, feels_like: 0},
        wind: {speed: 0},
        rain: null,
        snow: null,
        weather: [{id: 0, main: "", description: "", icon: ""}],
    },
};
 export const fetchWeather:any = createAsyncThunk(
    'main/fetchWeather',
    async (_,{dispatch})=>{
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
        dispatch(getWeatherList(weather.data.list))
        dispatch(getDailyForecast(dailyForecast.data.daily))
        dispatch(getHourlyForecast(hourlyForecast.data.hourly))
    }

)


const mainSlice = createSlice(
    {
        name: "main",
        initialState,
        reducers: {
            getWeatherList(state,action){
                state.list = action.payload
            },
            getDailyForecast(state,action){
                state.dailyForecast =action.payload
            },
            getHourlyForecast(state,action){
                state.hourlyForecast = action.payload
            }
        },
        extraReducers : {
            [fetchWeather.pending]:(state)=>{
                state.loading = true
            },
            [fetchWeather.fulfilled]:(state)=>{
                state.loading = false
            }
        }
    }

)
export const {getDailyForecast,getHourlyForecast,getWeatherList} = mainSlice.actions

export default mainSlice.reducer