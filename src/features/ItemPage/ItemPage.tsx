import React from 'react';
import { Item } from 'context/Items/ItemsContext';
import { ItemHeader } from './header/ItemHeader';
import { ItemDetailsContainer } from './details/ItemDetailsContainer';
import { ItemChartsContainer } from './charts/ItemChartsContainer';
import styles from './ItemPage.mod.scss';

export interface ItemPageProps {
  item: Item;
  isFavourite: boolean;
  toggleFavourite: (itemId: number) => void;
}

export const ItemPage = ({
  item,
  isFavourite,
  toggleFavourite,
}: ItemPageProps) => {
  return (
    <div className={styles.itemPage}>
      <ItemHeader
        item={item}
        isFavourite={isFavourite}
        toggleFavourite={toggleFavourite}
      />
      <ItemDetailsContainer item={item} />
      <ItemChartsContainer item={item} />
    </div>
  );
};
