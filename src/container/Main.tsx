import React from "react";
import { CityInfo } from "../components/CityInfo";
import { Forecast } from "../components/Forecast";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypedSelector";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
