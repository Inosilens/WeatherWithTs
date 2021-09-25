import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend} from 'recharts';
import React, {FC} from "react";
import {IForecastData} from "../pages/main/types";
import {Temp} from "./Temp";


interface RechartProps {
    forecast: any
}

const CourseLineChart: FC<RechartProps> = ({forecast}) => {
    const DATA = forecast.slice(0, 10)
    const addToNewDate = (array: IForecastData[]) => {
        const newData = []
        for (let i = 0; i < array.length; i++) {
            const obj = {date: (new Date(array[i].dt * 1000)).getHours(), 'температура': array[i].temp}
            newData.push(obj)
        }
        return newData
    }

    return (
        <React.Fragment>
            <ResponsiveContainer width="100%" aspect={2}>
                <LineChart data={addToNewDate(DATA)} margin={{left: 50, right: 50, top: 100, bottom: 100}}>
                    <CartesianGrid strokeDasharray="2 2"/>
                    <Tooltip contentStyle={{backgroundColor: "lightgray"}}/>
                    <Line dataKey="температура" stroke="red" activeDot={{r: 10}} type="monotone"/>
                    <XAxis dataKey='date' interval="preserveStartEnd" tickFormatter={forecast.temp}/>
                    <YAxis/>
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>

    );
};
export default CourseLineChart