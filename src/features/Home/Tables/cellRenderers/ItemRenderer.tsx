import React from 'react';
import { Link } from 'react-router-dom';
import { ICellRendererParams } from 'ag-grid-community';
import { getItemImageSource } from 'utils/itemImage.utils';
import styles from './ItemRenderer.mod.scss';

interface ItemRendererValue {
  name: string;
  id: string;
  icon: string;
}

export const ItemRenderer = ({ value }: ICellRendererParams) => {
  const { name, id, icon }: ItemRendererValue = value;
  return (
    <div className={styles.itemRenderer}>
      <img src={getItemImageSource(icon)} alt={name} />
      <Link to={`/item/${id}`}>{name}</Link>
    </div>
  );
};
