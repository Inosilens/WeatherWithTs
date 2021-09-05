import React, { FC } from "react";
import { getCurrentDate, IMAGE_URL } from "../../helpers/constants";
import styled from "styled-components";
import { mathFloor } from "../../helpers/mathfloor";
const DailyForecast = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const HourlyForecast = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
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
  description: string;
}
interface Item {
  dt: any;
  temp: any | Temp;
  weather: Weather[];
}
interface Props {
  item: Item;
  hourly: boolean;
  color?: string;
}

export const ForecastCart: FC<Props> = ({ item, hourly }) => {
  const day: any = new Date(item.dt * 1000);
  const thisDate = getCurrentDate(day.getMonth());
  const Hour = day.getHours();

  if (hourly) {
    return (
      <HourlyForecast>
        <Time> {Hour}:00</Time>
        <Temp>{mathFloor(item.temp)} &#8451;</Temp>
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
    <DailyForecast>
      <Time>
        {day.getDate()} {thisDate}
      </Time>

      <Temp> {mathFloor(item.temp.day)} &#8451;</Temp>
      <Img>
        <img
          src={IMAGE_URL + item.weather[0].icon + `@2x.png`}
          alt="weather"
          width="40px"
        />
      </Img>
    </DailyForecast>
  );
};
