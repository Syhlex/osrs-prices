import React from 'react';
import { Data } from 'plotly.js';
import { getTickValues } from 'utils/chart.utils';
import { addCommas } from 'utils/number.utils';
import { configSettings, getLayoutSettings } from './chartConfig';
import { ItemChartBase } from './ItemChartBase';

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
  const lowVolumesNegated = lowVolumes.map((value) => -value);
  const numTicks = 6;
  const minValue = Math.min(...lowVolumesNegated);
  const maxValue = Math.max(...highVolumes);
  const tickValues = getTickValues(minValue, maxValue, numTicks);
  const tickText = tickValues.map((value) => addCommas(Math.abs(value)));

  const highVolumeTrace: Data = {
    name: 'High price volume',
    x: timestamps,
    y: highVolumes,
    marker: {
      color: '#ffa333', // orange
    },
    type: 'bar',
  };

  const lowVolumeTrace: Data = {
    name: 'Low price volume',
    x: timestamps,
    y: lowVolumesNegated,
    type: 'bar',
    marker: {
      color: '#33ff5f', // green
    },
    text: lowVolumes.map((value) => value.toString()), // Display positive value in hover tooltip
    hovertemplate: '%{text:,}',
  };

  return (
    <ItemChartBase
      title="Volume"
      plotProps={{
        layout: getLayoutSettings({
          barmode: 'overlay',
          yaxis: {
            tickformat: ',', // Adds commas to numbers
            gridcolor: '#848484',
            tickvals: tickValues,
            ticktext: tickText,
          },
        }),
        config: configSettings,
        data: [highVolumeTrace, lowVolumeTrace],
      }}
    />
  );
};
