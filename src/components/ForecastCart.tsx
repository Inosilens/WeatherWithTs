import React, { FC } from "react";
interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
}
interface Item {
  dt: any;
  temp: Temp;
}
interface Props {
  item: Item;
}
export const ForecastCart: FC<Props> = ({ item }) => {
  const day: any = new Date(item.dt * 1000).toString();
  return <div>{day}</div>;
};
