import React from "react";
import { CityInfo } from "./CityInfo";
import { Forecast } from "./Forecast";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypedSelector";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Main = () => {
  const { loading } = useTypedSelector((state) => state.weather);

  if (loading) {
    return null;
  }
  return (
    <Container>
      <CityInfo />
      <Forecast />
    </Container>
  );
};
