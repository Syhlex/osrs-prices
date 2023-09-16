import React from 'react';
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
  return (
    <ItemChartBase
      title="Price"
      plotProps={{
        layout: getLayoutSettings(),
        config: configSettings,
        data: [
          {
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
          },
          {
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
          },
        ],
      }}
    ></ItemChartBase>
  );
};
