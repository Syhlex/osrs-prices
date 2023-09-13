import React from 'react';
import { Card } from 'components';
import styles from './ItemPriceChart.mod.scss';

export interface ItemPriceChartProps {}

export const ItemPriceChart = (props: ItemPriceChartProps) => {
  return (
    <Card classes={{ card: styles.itemPriceChart }}>
      <div className={styles.title}>Price</div>
      <div className={styles.subtitle}>
        Click and drag to zoom in. Double-click to zoom out.
        <br />
        Displaying data at 5 minute intervals.
      </div>
    </Card>
  );
};
