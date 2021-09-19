import React, {FC, useEffect} from "react";
import {createGlobalStyle} from "styled-components";
import {AppRouter} from "../components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "./auth/Auth-slice";

const GlobalStyle = createGlobalStyle`
  body {
   margin:0 auto
   background: rgb(176,172,231);
   background: linear-gradient(90deg, rgba(176,172,231,1) 0%, rgba(141,141,230,1) 41%, rgba(214,247,254,1) 100%);
  }
`;

export const App: FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem("auth")) {
            dispatch(login())
        }
    })
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <AppRouter/>
        </BrowserRouter>
    );
};
