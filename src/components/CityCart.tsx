import React, { FC } from "react";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";
import { CityInfo } from "../store/types/Weather";
import { transcription } from "../helpers/transcription";
import { dynamicBackground } from "../helpers/dynamicBackground";
import { Icon } from "./UI/Icon";
import { Temp } from "./UI/Temp";
const Name = styled.div``;
const Cart = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: row;
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

export const CityCart: FC<CityInfo> = (city) => {
  const { getCityInfo, getForecast, getHourlyForecast } = useActions();
  const cityInfo = (item: object) => {
    getCityInfo(item);
  };
  const foreCast = (lat: any, lon: any) => {
    getForecast(lat, lon);
  };
  const hourlyForecast = (lat: number, lon: number) => {
    getHourlyForecast(lat, lon);
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
