import React, { FC } from "react";
import { getCurrentDate, IMAGE_URL } from "../helpers/constants";
import styled from "styled-components";

const HourlyForecast = styled.div`
  display: flex;
  flex-direction: column;
`;
const Time = styled.div``;
const Temp = styled.div``;
const Img = styled.div``;
interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
}
interface Weather {
  id: number;
  icon: string;
}
interface Item {
  dt: any;
  temp: Temp;
  weather: Weather[];
}
interface Props {
  item: Item;
  hourly: boolean;
}

export const ForecastCart: FC<Props> = ({ item, hourly }) => {
  const day: any = new Date(item.dt * 1000);
  const thisDate = getCurrentDate(day.getMonth());
  const Hour = day.getHours();

  if (hourly) {
    return (
      <HourlyForecast>
        <Time> {Hour}</Time>
        <Temp>{item.temp}</Temp>
        <Img>
          <img
            src={IMAGE_URL + item.weather[0].icon + `@2x.png`}
            alt="weather"
            width="40px"
          />
        </Img>
      </HourlyForecast>
    );
  }
  return (
    <div>
      {day.getDate()} {thisDate}
      {item.temp.day}
      <img
        src={IMAGE_URL + item.weather[0].icon + `@2x.png`}
        alt="weather"
        width="40px"
      />
    </div>
  );
};
