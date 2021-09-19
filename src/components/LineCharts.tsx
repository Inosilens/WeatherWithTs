import {LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend} from 'recharts';
import React, {FC} from "react";


interface RechartProps{
    forecast : any
}
const CourseLineChart:FC<RechartProps>=({forecast})=>{
    const DATA =forecast.slice(0,10)
    return (
        <React.Fragment>
            <ResponsiveContainer width="100%" aspect={2} >
                <LineChart data={DATA} margin={{left:50, right:50, top:100, bottom:100}}>
                    <CartesianGrid strokeDasharray="2 2"/>
                    <Tooltip contentStyle={{backgroundColor:"lightgray"}}/>
                    <Line dataKey="temp" stroke="red" activeDot={{r:10}} type="monotone" />
                    <XAxis dataKey ='dt' interval="preserveStartEnd" tickFormatter={forecast.temp}/>
                    <YAxis />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>

    );
};
export default CourseLineChart