export const API_KEY = "566df9663d5d058beb3a70db0b013aac";
export const BASE_URL = `https://api.openweathermap.org/data/2.5/find?`;
export const FORECAST_URL = `https://api.openweathermap.org/data/2.5/onecall?`;
export const IMAGE_URL = `http://openweathermap.org/img/wn/`;

//DATE AND TIME
export const date = new Date();
export const Hour = date.getHours();
export const Minutes = date.getMinutes();
export const Day = date.getDate();
const Month = date.getMonth();
export const getCurrentDate = (mont: number) =>
  ({
    0: "января",
    1: "февраля",
    2: "марта",
    3: "апреля",
    4: "мае",
    5: "июня",
    6: "июля",
    7: "августа",
    8: "сентября",
    9: "октября",
    10: "ноября",
    11: "декабря",
  }[mont] || undefined);

export const thisDay = getCurrentDate(Month);

//https://api.openweathermap.org/data/2.5/onecall?lat=56.5&lon=84.9667&exclude=hourly&appid=566df9663d5d058beb3a70db0b013aac&lang=ru
