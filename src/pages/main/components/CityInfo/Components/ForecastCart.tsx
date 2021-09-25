import React, { FC } from "react";
import { getCurrentDate } from "../../../../../helpers/constants";
import styled from "styled-components";
import { Icon } from "../../../../../components/Icon";
import { Temp } from "../../../../../components/Temp";
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
const Time = styled.div`
margin-left: 10px`;

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
        <Temp temp={item.temp} />
        <Icon width={50} link={item.weather[0].icon} />
      </HourlyForecast>
    );
  }
  return (
    <DailyForecast>
      <Time>
        {day.getDate()}  {thisDate}
      </Time>
      <Temp temp={item.temp.day} />
      <Icon width={50} link={item.weather[0].icon} />
    </DailyForecast>
  );
};
