import React, {FC, useEffect} from "react";
import {createGlobalStyle} from "styled-components";
import {AppRouter} from "../components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "./auth/Auth-slice";

const GlobalStyle = createGlobalStyle`
  body {
   margin:0 auto
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
