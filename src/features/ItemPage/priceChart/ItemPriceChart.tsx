import React from 'react';
import { Card } from 'components';
import styles from './ItemPriceChart.mod.scss';

export interface ItemPriceChartProps {}

export const ItemPriceChart = (props: ItemPriceChartProps) => {
  return <Card classes={{ card: styles.itemPriceChart }}>Price</Card>;
};
