import React from "react";
import { CityInfo } from "../components/CityInfo";
import { Forecast } from "../components/Forecast";
import styled from "styled-components";
export const Main = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Container>
      <CityInfo />
      <Forecast />
    </Container>
  );
};
