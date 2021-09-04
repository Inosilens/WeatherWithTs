import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styled from "styled-components";

export const CityInfo: FC = () => {
  const { cityInfo } = useTypedSelector((state) => state.weather);
  const Container = styled.div`
    margin: 10px 100px 0px;
  `;
  return (
    <Container>
      <h1>{cityInfo.name}</h1>
      <h3>Температура: {cityInfo.main.temp} </h3>
      <h3>Ощущается : {cityInfo.main.feels_like}</h3>
      <h3>Максимальная Температура: {cityInfo.main.temp_max}</h3>
      <h3>Максимальная Температура :{cityInfo.main.temp_min}</h3>
      <h3>Скорость ветра : {cityInfo.wind.speed} </h3>
    </Container>
  );
};
