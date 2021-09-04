import React, { FC } from "react";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";

export interface CityProps {
  name: string;
  coord?: { lat: number; lon: number };
  main?: {};
}
export const CityCart: FC<CityProps> = (city) => {
  const { getCityInfo } = useActions();
  const cityInfo = (item: object) => {
    getCityInfo(item);
  };
  const Cart = styled.div`
    margin: 10px;
  `;
  return <Cart onClick={() => cityInfo(city)}>{city.name}</Cart>;
};
