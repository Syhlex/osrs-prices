import React from 'react';
import Plot, { PlotParams } from 'react-plotly.js';
import { Card } from 'components';
import styles from './ChartBase.mod.scss';

export interface ChartBaseProps {
  title: string;
  plotProps: PlotParams;
}

export const ChartBase = ({ title, plotProps }: ChartBaseProps) => {
  return (
    <Card classes={{ card: styles.chartCard }}>
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
