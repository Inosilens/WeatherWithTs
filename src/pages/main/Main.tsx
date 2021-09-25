import React, {useEffect} from "react";
import {CityInfo} from "./components/CityInfo/CityInfo";
import {Forecast} from "./components/Forecast/Forecast";
import styled from "styled-components";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchWeather} from "./Main-slice";
import {useDispatch} from "react-redux";
import {Header} from "./components/Header/Header";
import {Loader} from "../../components/Loader";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: rgba(17, 63, 102, 0.3);
`;

export const Main = () => {
    const dispatch = useDispatch()
    const {loading} = useTypedSelector(state => state.main)

    useEffect(() => {
        dispatch(fetchWeather())
    }, []);


    if (loading) {
        return <><Loader/></>
    }

    return (
        <>
            <Header/>
            <Container>
                <CityInfo/>
                <Forecast/>
            </Container>
        </>
    );
};
