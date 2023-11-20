import React from 'react';
import { Item } from 'context/Items/ItemsContext';
import { ItemTableContainer } from 'features/ItemTable/ItemTableContainer';

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
    <div>
      <div>Favourites</div>
      <div>
        This page displays all of the items that you have added to your
        favourites. You can add a favourite item by going to the item's page and
        then pressing the star icon. We store your favourites in your browser's
        storage, so this won't persist between devices.
      </div>
      <ItemTableContainer
        items={items}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};
