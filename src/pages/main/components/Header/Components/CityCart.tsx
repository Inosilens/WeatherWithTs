import React, { FC } from "react";
import styled from "styled-components";
import { ICityInfo } from "../../../types";
import { transcription } from "../../../../../helpers/transcription";
import { dynamicBackground } from "../../../../../helpers/dynamicBackground";
import { Icon } from "../../../../../components/Icon";
import { Temp } from "../../../../../components/Temp";
import {fetchDailyForecast, fetchHourlyForecast, getCityInfo} from "../../../Main-slice";
import {useDispatch} from "react-redux";
const Name = styled.div`
  margin-left: 10px;
`;
const Cart = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Round = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  box-shadow: 0 0 7px #666;
`;

export const CityCart: FC<ICityInfo> = (city) => {
  const dispatch=useDispatch()
  const cityInfo = (item: object) => {
   dispatch(getCityInfo(item)) ;
  };
  const foreCast = (lat: any, lon: any) => {
   dispatch(fetchDailyForecast({lat:lat,lon:lon}));
  };
  const hourlyForecast = (lat: number, lon: number) => {
     dispatch(fetchHourlyForecast({lat, lon}))
  };

  return (
    <Cart
      onClick={() => {
        cityInfo(city);
        hourlyForecast(city.coord?.lat, city.coord?.lon);
        foreCast(city.coord?.lat, city.coord?.lon);
      }}
    >
      <Round src={process.env.PUBLIC_URL + dynamicBackground(city.name)} />
      <WeatherInfo>
        <Name>{transcription(city.name, true)}</Name>
        <Temp temp={city.main.temp} />
        <Icon width={40} link={city.weather[0].icon} />
      </WeatherInfo>
    </Cart>
  );
};
