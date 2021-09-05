import React, { FC } from "react";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";
import { CityInfo } from "../store/types/Weather";

const Cart = styled.span`
  margin: 10px;
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
      {city.name}
    </Cart>
  );
};
