import React from 'react';
import { useParams } from 'react-router-dom';
import { useTitle } from 'hooks/useTitle';
import { useItems } from 'hooks/useItems';
import { ItemDetails } from './ItemDetails';

export const ItemDetailsContainer = () => {
  const { id = '' } = useParams();
  const { itemsMap } = useItems();
  const itemName = itemsMap[id]?.name ?? '';
  useTitle(itemName);

  return <ItemDetails id={id} name={itemName} />;
};
