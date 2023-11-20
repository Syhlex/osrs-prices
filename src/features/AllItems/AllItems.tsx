import React, { useEffect, useState } from 'react';
import { useTitle } from 'hooks/useTitle';
import { useItems } from 'hooks/useItems';
import {
  getStoredFavourites,
  setStoredFavourites,
} from 'features/Favourites/favouritesManager';
import { ItemTableContainer } from 'features/ItemTable/ItemTableContainer';

export const AllItems = () => {
  useTitle('All Items');
  const { items } = useItems();

  const [favourites, setFavourites] = useState(new Set<number>());
  useEffect(() => {
    getStoredFavourites().then((favourites) => {
      setFavourites(favourites);
    });
  }, []);

  const toggleFavourite = (itemId: number) => {
    const updatedFavourites = new Set(favourites);
    if (updatedFavourites.has(itemId)) {
      updatedFavourites.delete(itemId);
    } else {
      updatedFavourites.add(itemId);
    }
    setFavourites(updatedFavourites);
    setStoredFavourites(updatedFavourites);
  };

  return (
    <ItemTableContainer
      items={items}
      favourites={favourites}
      toggleFavourite={toggleFavourite}
    />
  );
};
