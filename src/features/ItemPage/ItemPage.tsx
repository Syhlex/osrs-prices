import React from 'react';
import { Item } from 'context/Items/ItemsContext';
import { ItemHeader } from './header/ItemHeader';
import { ItemDetailsContainer } from './details/ItemDetailsContainer';
import { ItemChartsContainer } from './charts/ItemChartsContainer';
import styles from './ItemPage.mod.scss';

export interface ItemPageProps {
  item: Item;
}

export const ItemPage = ({ item }: ItemPageProps) => {
  return (
    <div className={styles.itemPage}>
      <ItemHeader item={item} />
      <ItemDetailsContainer item={item} />
      <ItemChartsContainer item={item} />
    </div>
  );
};
