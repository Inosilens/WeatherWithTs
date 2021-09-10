import React, { FC } from "react";
import { mathFloor } from "../../helpers/mathfloor";
import styled from "styled-components";
interface ITemp {
  temp: any;
  margin?:any
}
const TempBox = styled.div`
margin-left: 10px`
export const Temp: FC<ITemp> = ({ temp }) => {
  return <TempBox >{mathFloor(temp)}&#8451;</TempBox>;
};
