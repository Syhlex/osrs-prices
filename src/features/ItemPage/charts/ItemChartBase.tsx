import React from 'react';
import Plot, { PlotParams } from 'react-plotly.js';
import { Card } from 'components';
import styles from './ItemChartBase.mod.scss';

export interface ItemChartBaseProps {
  title: string;
  plotProps: PlotParams;
}

export const ItemChartBase = ({ title, plotProps }: ItemChartBaseProps) => {
  return (
    <Card classes={{ card: styles.itemChartCard }}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>
        Click and drag to zoom in. Double-click to zoom out.
        <br />
        Displaying data at 5 minute intervals.
      </div>
      <Plot className={styles.plot} {...plotProps} />
    </Card>
  );
};
