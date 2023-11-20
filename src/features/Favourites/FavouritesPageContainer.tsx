import React, { useEffect, useState } from 'react';
import { useItems } from 'hooks/useItems';
import { useTitle } from 'hooks/useTitle';
import { getStoredFavourites, setStoredFavourites } from './favouritesManager';
import { FavouritesPage } from './FavouritesPage';

export const FavouritesPageContainer = () => {
  useTitle('Favourites');
  const { items } = useItems();
  const [favourites, setFavourites] = useState(new Set<number>());

  useEffect(() => {
    getStoredFavourites().then((favourites) => {
      setFavourites(favourites);
    });
  }, []);

  const favouriteItems = items.filter((item) => {
    return favourites.has(item.id);
  });

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
    <FavouritesPage
      items={favouriteItems}
      favourites={favourites}
      toggleFavourite={toggleFavourite}
    />
  );
};
