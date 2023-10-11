import React from 'react';
import { useTitle } from 'hooks/useTitle';
import { FavouritesPage } from './FavouritesPage';

export const FavouritesPageContainer = () => {
  useTitle('Favourites');
  return <FavouritesPage favourites={[]} />;
};
