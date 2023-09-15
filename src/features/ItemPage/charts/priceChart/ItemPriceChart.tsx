import React from 'react';
import Plot from 'react-plotly.js';
import { Card } from 'components';
import {
  configSettings,
  layoutSettings,
  sharedDataSettings,
} from './chartConfig';
import styles from './ItemPriceChart.mod.scss';

export interface ItemPriceChartProps {
  timeData: number[];
  lowPriceData: number[];
  highPriceData: number[];
}

export const ItemPriceChart = ({
  timeData,
  lowPriceData,
  highPriceData,
}: ItemPriceChartProps) => {
  return (
    <Card classes={{ card: styles.itemPriceChart }}>
      <div className={styles.title}>Price</div>
      <div className={styles.subtitle}>
        Click and drag to zoom in. Double-click to zoom out.
        <br />
        Displaying data at 5 minute intervals.
      </div>
      <Plot
        data={[
          {
            x: timeData,
            y: highPriceData,
            line: {
              color: '#ffa333', // orange
            },
            ...sharedDataSettings,
          },
          {
            x: timeData,
            y: lowPriceData,
            line: {
              color: '#33ff5f', // green
            },
            ...sharedDataSettings,
          },
        ]}
        layout={layoutSettings}
        config={configSettings}
      />
    </Card>
  );
};
