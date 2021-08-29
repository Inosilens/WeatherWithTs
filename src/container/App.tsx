import React, {FC} from 'react';
import '../App.css';
import {HeaderApp} from "../components/HeaderApp";
import {Main} from "../components/Main";



export const App: FC = () => {
  return (

        <div>
          <HeaderApp/>
          <Main/>

        </div>

  );
};

