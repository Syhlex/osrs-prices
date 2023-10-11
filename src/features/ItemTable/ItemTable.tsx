import React from 'react';
import { useItems } from 'hooks/useItems';

export interface ItemTableProps {}

export const ItemTable = (props: ItemTableProps) => {
  const { itemRows } = useItems();

  return (
    <table>
      <tbody></tbody>
    </table>
  );
};
