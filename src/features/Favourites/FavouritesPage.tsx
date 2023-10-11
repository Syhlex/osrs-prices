import React from 'react';

export interface FavouritesPageProps {
  favourites: string[];
}

export const FavouritesPage = ({ favourites }: FavouritesPageProps) => {
  return (
    <div>
      <div>Favourites</div>
      <div>
        This page displays all of the items that you have added to your
        favourites. You can add a favourite item by going to the item's page and
        then pressing the star icon. We store your favourites in your browser's
        storage, so this won't persist between devices.
      </div>
    </div>
  );
};
