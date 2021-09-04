import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ForecastCart } from "./ForecastCart";

export const Forecast: FC = () => {
  const { forecast } = useTypedSelector((state) => state.weather);
  return (
    <div>
      {forecast.map((item: any, index: number) => (
        <ForecastCart key={index} item={item} />
      ))}
    </div>
  );
};
