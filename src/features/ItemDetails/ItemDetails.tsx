import React from 'react';

export interface ItemDetails {
  id: string;
  name: string;
}

export const ItemDetails = (props: ItemDetails) => {
  return <div>{`${props.name} (Item ID: ${props.id})`}</div>;
};
