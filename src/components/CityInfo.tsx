import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styled from "styled-components";
import { Day, Hour, IMAGE_URL, Minutes, thisDay } from "../helpers/constants";
import { ForecastCart } from "./UI/ForecastCart";
import { transcription } from "../helpers/transcription";
import { mathFloor } from "../helpers/mathfloor";
import { dynamicBackground } from "../helpers/dynamicBackground";
import { Icon } from "./UI/Icon";

interface Container {
  cityName?: string;
  patch: any;
}

const ContainerInfo = styled.div<Container>`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px;
  background-size: cover;
  background: linear-gradient(rgba(255, 252, 252, 0.18), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.patch}) center center no-repeat;
  background-size: contain;
  color: #ec0e3b;
`;

export const CityInfo: FC = () => {
  const { cityInfo, dailyForecast } = useTypedSelector(
    (state) => state.weather
  );

  return (
    <ContainerInfo
      cityName={cityInfo.name}
      patch={process.env.PUBLIC_URL + dynamicBackground(cityInfo.name)}
    >
      <h1>{transcription(cityInfo.name, true)}</h1>
      <h3>
        {Hour}:{Minutes}
      </h3>
      <h3>
        {Day} {thisDay}
      </h3>
      <Icon width={100} link={cityInfo.weather[0].icon} />
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
    </ContainerInfo>
  );
};
