import React from 'react';
import { Card } from 'components';
import { Item } from 'context/Items/ItemsContext';
import { ItemHeader } from './header/ItemHeader';
import { ItemDetails } from './details/ItemDetails';
import styles from './ItemPage.mod.scss';
import { ItemPriceChart } from './priceChart/ItemPriceChart';

export interface ItemPageProps {
  item: Item;
}

export const ItemPage = ({ item }: ItemPageProps) => {
  return (
    <div className={styles.itemPage}>
      <ItemHeader item={item} />
      <ItemDetails item={item} />
      <ItemPriceChart />
      <Card>Volume</Card>
    </div>
  );
};
