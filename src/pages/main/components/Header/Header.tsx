import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { CityCart } from "../../../../components/CityCart";
import styled from "styled-components";
import { useActions } from "../../../../hooks/useActions";
import { Panagination } from "../../../../components/Panagination";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #abb7d9;
`;
const CityList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

export const Header: FC = () => {
  const { list, loading, error } = useTypedSelector((state) => state.weather);
  const { currentPage } = useTypedSelector((state) => state.panagination);
  const { fetchWeather } = useActions();

  useEffect(() => {
    fetchWeather();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const CITY_PER_PAGE = 5;
  const LAST_CITY_INDEX = currentPage * CITY_PER_PAGE;
  const FIRST_CITY_INDEX = LAST_CITY_INDEX - CITY_PER_PAGE;
  const currentCity = list.slice(FIRST_CITY_INDEX, LAST_CITY_INDEX);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Container>
      <CityList>
        {currentCity.map((city) => (
          <CityCart key={city.id} {...city} />
        ))}
      </CityList>
      <Panagination />
    </Container>
  );
};