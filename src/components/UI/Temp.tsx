import React, { FC } from "react";
import { mathFloor } from "../../helpers/mathfloor";
interface ITemp {
  temp: any;
}
export const Temp: FC<ITemp> = ({ temp }) => {
  return <div>{mathFloor(temp)}&#8451;</div>;
};
