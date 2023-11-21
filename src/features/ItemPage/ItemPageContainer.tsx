import React from 'react';
import { useParams } from 'react-router-dom';
import { useFavourites } from 'hooks/useFavourites';
import { useItems } from 'hooks/useItems';
import { useTitle } from 'hooks/useTitle';
import { ItemPage } from './ItemPage';

export const ItemPageContainer = () => {
  const { id = '' } = useParams();
  const { itemsMap } = useItems();
  const item = itemsMap[id];

  useTitle(item?.name ?? '');

  const { favourites, toggleFavourite } = useFavourites();
  const isFavourite = favourites.has(parseInt(id));

  return item ? (
    <ItemPage
      item={item}
      isFavourite={isFavourite}
      toggleFavourite={toggleFavourite}
    />
  ) : (
    <div>Item with id {id} was not found.</div>
  );
};
