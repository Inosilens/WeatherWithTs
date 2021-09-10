import React, { FC } from "react";
import { HeaderApp } from "./HeaderApp";
import { Main } from "./Main";
import styled  from "styled-components";

const GlobalStyle = styled.div`
  background: rgba(145, 161, 158, 0.47);
`;

export const App: FC = () => {
  return (
    <GlobalStyle>
      <HeaderApp />
      <Main />
    </GlobalStyle>
  );
};
