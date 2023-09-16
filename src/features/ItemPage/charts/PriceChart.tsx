import React from 'react';
import {
  configSettings,
  layoutSettings,
  sharedDataSettings,
} from './chartConfig';
import { ItemChartBase } from './ItemChartBase';

export interface PriceChartProps {
  lowPriceTimeData: number[];
  lowPriceData: number[];
  highPriceTimeData: number[];
  highPriceData: number[];
}

export const PriceChart = ({
  lowPriceTimeData,
  lowPriceData,
  highPriceTimeData,
  highPriceData,
}: PriceChartProps) => {
  return (
    <ItemChartBase
      title="Price"
      plotProps={{
        layout: layoutSettings,
        config: configSettings,
        data: [
          {
            x: highPriceTimeData,
            y: highPriceData,
            line: {
              color: '#ffa333', // orange
            },
            ...sharedDataSettings,
          },
          {
            x: lowPriceTimeData,
            y: lowPriceData,
            line: {
              color: '#33ff5f', // green
            },
            ...sharedDataSettings,
          },
        ],
      }}
    ></ItemChartBase>
  );
};
