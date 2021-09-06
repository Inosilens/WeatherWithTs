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
export const getCurrentDate = (mont:any) => {
  switch (mont) {
    case 0:
      return (mont = "января");
    case 1:
      return (mont = "февраля");
    case 2:
      return (mont = "марта");
    case 3:
      return (mont = "апреля");
    case 4:
      return (mont = "мае");
    case 5:
      return (mont = "июня");
    case 6:
      return (mont = "июля");
    case 7:
      return (mont = "августа");
    case 8:
      return (mont = "сентября");
    case 9:
      return (mont = "октября");
    case 10:
      return (mont = "ноября");
    case 11:
      return (mont = "декабря");
    default:
      return null;
  }
};

export const thisDay = getCurrentDate(Month);

//https://api.openweathermap.org/data/2.5/onecall?lat=56.5&lon=84.9667&exclude=hourly&appid=566df9663d5d058beb3a70db0b013aac&lang=ru
