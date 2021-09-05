import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ForecastCart } from "./UI/ForecastCart";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ForecastContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Forecast: FC = () => {
  const { hourlyForecast } = useTypedSelector((state) => state.weather);

    return (
    <Container>
      <h1>Текущая температура :</h1>
      <ForecastContainer>
        {hourlyForecast
          .map((item: any, index: number) => (
            <ForecastCart hourly={true} key={index} item={item} />
          ))
          .splice(1, 10)}
      </ForecastContainer>
    </Container>
  );
};
