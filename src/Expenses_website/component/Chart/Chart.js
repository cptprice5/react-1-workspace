import React from 'react';

import ChartBarDa from './ChartBar';
import './Chart.css';

const ChartDa =(props) => {
    const maxValGen = props.mainDataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...maxValGen);

    return (<div className='chart'>
        {props.mainDataPoints.map((dataPoint) => {
           return <ChartBarDa key = {dataPoint.label}
                    value = {dataPoint.value}
                    maxValue ={totalMax}
                    label = {dataPoint.label} /> ;
        })}
    </div>);
}

export default ChartDa;