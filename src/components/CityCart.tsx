import React  from 'react';
import {CityProps} from "./types/CityType";


export const CityCart = (city:CityProps) => {

    return (
        <div>
            {city.name}
        </div>
    );
};

