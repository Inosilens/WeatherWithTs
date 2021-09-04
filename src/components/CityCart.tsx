import React, { FC } from "react";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";
import { getForecast } from "../store/actions/weatherAction";

export interface CityProps {
  name: string;
  coord?: { lat: number; lon: number };
  main?: {};
}
export const CityCart: FC<CityProps> = (city) => {
  const { getCityInfo, getForecast } = useActions();
  const cityInfo = (item: object) => {
    getCityInfo(item);
  };
  const foreCast = (lat: any, lon: any) => {
    getForecast(lat,lon)
  };
  const Cart = styled.div`
    margin: 10px;
  `;
  return (
    <Cart
      onClick={() => {
        cityInfo(city);
        foreCast(city.coord?.lat, city.coord?.lon);
      }}
    >
      {city.name}
    </Cart>
  );
};
