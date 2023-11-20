import React from 'react';
import { useTitle } from 'hooks/useTitle';
import { useItems } from 'hooks/useItems';
import { ItemTableContainer } from 'features/ItemTable/ItemTableContainer';

export const AllItems = () => {
  useTitle('All Items');
  const { items } = useItems();
  return <ItemTableContainer items={items} />;
};
