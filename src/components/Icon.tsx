import React, { FC } from "react";
import { IMAGE_URL } from "../helpers/constants";
interface IIcon {
  link: any;
  width: number;
}
export const Icon: FC<IIcon> = ({ link, width }) => {
  return (
    <img
      width={`${width}px`}
      src={IMAGE_URL + link + `@2x.png`}
      alt="weather"
    />
  );
};
