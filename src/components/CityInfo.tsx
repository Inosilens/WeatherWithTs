import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styled from "styled-components";
import { Day, Hour, IMAGE_URL, Minutes, thisDay } from "../helpers/constants";
import { ForecastCart } from "./UI/ForecastCart";
import { transcription } from "../helpers/transcription";
import { mathFloor } from "../helpers/mathfloor";
const Container = styled.div`
  margin: 10px 100px 0;
`;
export const CityInfo: FC = () => {
  const { cityInfo, dailyForecast } = useTypedSelector(
    (state) => state.weather
  );

  return (
    <Container >
      <h1>{transcription(cityInfo.name, true)}</h1>
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
        {mathFloor(cityInfo.main.temp)}
        &#8451;
      </h3>
      <h3>
        Ощущается : {mathFloor(cityInfo.main.feels_like)}
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
