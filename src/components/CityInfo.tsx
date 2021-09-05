import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styled from "styled-components";
import { Day, Hour, IMAGE_URL, Minutes, thisDay } from "../helpers/constants";
import { ForecastCart } from "./UI/ForecastCart";
import { transcription } from "../helpers/transcription";
import { mathFloor } from "../helpers/mathfloor";
import { dynamicBackground } from "../helpers/dynamicBackground";
import Tomsk from "../img/Tomsk.jpg";

interface Container {
  cityName?: string;
  dynamicBackground: any;
}

const Container = styled.div<Container>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px;
  background-size: cover;
  background: linear-gradient(rgba(56, 51, 51, 0.8), rgba(0, 0, 0, 0.5)),
    url(${Tomsk}) center center no-repeat;
  background-size: cover;
  color: white;
`;
export const CityInfo: FC = () => {
  const { cityInfo, dailyForecast } = useTypedSelector(
    (state) => state.weather
  );
  console.log(dynamicBackground["Tomsk"]);

  return (
    <Container cityName={cityInfo.name} dynamicBackground={dynamicBackground}>
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
