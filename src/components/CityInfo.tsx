import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styled from "styled-components";
import { Day, Hour, IMAGE_URL, Minutes, thisDay } from "../helpers/constants";
import { ForecastCart } from "./ForecastCart";
const Container = styled.div`
  margin: 10px 100px 0px;
`;

export const CityInfo: FC = () => {
  const { cityInfo, dailyForecast } = useTypedSelector(
    (state) => state.weather
  );

  return (
    <Container>
      <h1>{cityInfo.name}</h1>
      <h3>
        {Hour}:{Minutes}
      </h3>
      <h3>
        {Day} {thisDay}
      </h3>
      <h1>
        <img
          src={IMAGE_URL + cityInfo.weather[0].icon + `@2x.png`}
          alt="weather"
        />
      </h1>
      <h3>
        {cityInfo.main.temp}
        &#8451;{" "}
      </h3>
      <h3>
        Ощущается : {cityInfo.main.feels_like}
        &#8451;
      </h3>

      {dailyForecast
        .map((item: any, index: number) => (
          <ForecastCart hourly={false} key={index} item={item} />
        ))
        .splice(1, 4)}
    </Container>
  );
};
