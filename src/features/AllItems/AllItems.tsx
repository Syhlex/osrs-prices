import React from 'react';
import { useFavourites } from 'hooks/useFavourites';
import { useItems } from 'hooks/useItems';
import { useTitle } from 'hooks/useTitle';
import { ItemTableContainer } from 'features/ItemTable/ItemTableContainer';
import styles from './AllItems.mod.scss';

export const AllItems = () => {
  useTitle('All Items');
  const { items } = useItems();
  const { favourites, toggleFavourite } = useFavourites();

  return (
    <div className={styles.allItems}>
      <ItemTableContainer
        items={items}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};
