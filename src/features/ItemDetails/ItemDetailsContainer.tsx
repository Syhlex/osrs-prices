import React from 'react';
import { useParams } from 'react-router-dom';
import { useTitle } from 'hooks/useTitle';
import { useItems } from 'hooks/useItems';
import { ItemDetails } from './ItemDetails';

export const ItemDetailsContainer = () => {
  const { id = '' } = useParams();
  const { itemsMap } = useItems();
  const item = itemsMap[id];
  const itemName = item?.name ?? '';
  useTitle(item?.name ?? '');

  return <ItemDetails id={id} name={itemName} />;
};
