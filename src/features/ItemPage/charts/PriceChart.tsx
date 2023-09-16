import React from 'react';
import { Data } from 'plotly.js';
import { configSettings, getLayoutSettings } from './chartConfig';
import { ItemChartBase } from './ItemChartBase';

export interface PriceChartProps {
  lowTimes: number[];
  lowPrices: number[];
  highTimes: number[];
  highPrices: number[];
}

export const PriceChart = ({
  lowTimes,
  lowPrices,
  highTimes,
  highPrices,
}: PriceChartProps) => {
  const highPriceTrace: Data = {
    name: 'High price',
    x: highTimes,
    y: highPrices,
    line: {
      color: '#ffa333', // orange
    },
    type: 'scatter',
    mode: 'lines+markers',
    marker: {
      size: 4,
    },
  };

  const lowPriceTrace: Data = {
    name: 'Low price',
    x: lowTimes,
    y: lowPrices,
    line: {
      color: '#33ff5f', // green
    },
    type: 'scatter',
    mode: 'lines+markers',
    marker: {
      size: 4,
    },
  };

  return (
    <ItemChartBase
      title="Price"
      plotProps={{
        layout: getLayoutSettings(),
        config: configSettings,
        data: [highPriceTrace, lowPriceTrace],
      }}
    ></ItemChartBase>
  );
};
