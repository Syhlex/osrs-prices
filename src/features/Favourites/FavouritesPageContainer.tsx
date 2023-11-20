import React from 'react';
import { useFavourites } from 'hooks/useFavourites';
import { useItems } from 'hooks/useItems';
import { useTitle } from 'hooks/useTitle';
import { FavouritesPage } from './FavouritesPage';

export const FavouritesPageContainer = () => {
  useTitle('Favourites');
  const { items } = useItems();
  const { favourites, toggleFavourite } = useFavourites();

  const favouriteItems = items.filter((item) => {
    return favourites.has(item.id);
  });

  return (
    <FavouritesPage
      items={favouriteItems}
      favourites={favourites}
      toggleFavourite={toggleFavourite}
    />
  );
};
