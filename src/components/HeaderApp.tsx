import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchWeather } from "../store/actions/weather";
import { useDispatch } from "react-redux";
import { CityCart } from "./CityCart";

export const HeaderApp: FC = () => {
  const { list, loading, error } = useTypedSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {list.map((city) => (
        <CityCart key={city.id} {...city} />
      ))}
    </div>
  );
};
