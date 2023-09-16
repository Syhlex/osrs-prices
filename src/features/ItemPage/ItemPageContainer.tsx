import React from 'react';
import { useParams } from 'react-router-dom';
import { useTitle } from 'hooks/useTitle';
import { useItems } from 'hooks/useItems';
import { ItemPage } from './ItemPage';

export const ItemPageContainer = () => {
  const { id = '' } = useParams();
  const { itemsMap } = useItems();
  const item = itemsMap[id];

  useTitle(item?.name ?? '');

  if (!item) {
    return <div>Item with id {id} was not found.</div>;
  }

  return <ItemPage item={item} />;
};
