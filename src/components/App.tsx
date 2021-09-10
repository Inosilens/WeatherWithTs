import React, { FC } from "react";
import { HeaderApp } from "./HeaderApp";
import { Main } from "./Main";
import  { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
   margin:0 auto
  }
`;

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <HeaderApp />
      <Main />
    </>
  );
};
