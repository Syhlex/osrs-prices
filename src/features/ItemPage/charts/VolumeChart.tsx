import React from 'react';
import { ItemChartBase } from './ItemChartBase';
import { configSettings, getLayoutSettings } from './chartConfig';

export interface VolumeChartProps {
  timestamps: number[];
  highVolumes: number[];
  lowVolumes: number[];
}

export const VolumeChart = ({
  timestamps,
  highVolumes,
  lowVolumes,
}: VolumeChartProps) => {
  return (
    <ItemChartBase
      title="Volume"
      plotProps={{
        layout: getLayoutSettings({
          barmode: 'overlay',
        }),
        config: configSettings,
        data: [
          {
            name: 'High price volume',
            x: timestamps,
            y: highVolumes,
            marker: {
              color: '#ffa333', // orange
            },
            type: 'bar',
          },
          {
            name: 'Low price volume',
            x: timestamps,
            y: lowVolumes,
            type: 'bar',
            marker: {
              color: '#33ff5f', // green
            },
          },
        ],
      }}
    />
  );
};
