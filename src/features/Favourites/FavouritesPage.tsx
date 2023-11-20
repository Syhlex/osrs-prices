import React from 'react';
import { Item } from 'context/Items/ItemsContext';
import { ItemTableContainer } from 'features/ItemTable/ItemTableContainer';
import styles from './FavouritesPage.mod.scss';

export interface FavouritesPageProps {
  items: Item[];
  favourites: Set<number>;
  toggleFavourite: (itemId: number) => void;
}

export const FavouritesPage = ({
  items,
  favourites,
  toggleFavourite,
}: FavouritesPageProps) => {
  return (
    <div className={styles.favouritesPage}>
      <h3 className={styles.header}>Favourites</h3>
      <p>
        This page displays all of the items that you have added to your
        favourites. You can add a favourite item by going to the item's page and
        then pressing the star icon. We store your favourites in your browser's
        storage, so this won't persist between devices.
      </p>
      <ItemTableContainer
        items={items}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        showSearchbar={false}
      />
    </div>
  );
};
