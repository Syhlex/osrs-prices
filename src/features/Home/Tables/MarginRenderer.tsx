import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import styles from './HomeTables.mod.scss';

export const MarginRenderer: React.FC<ICellRendererParams> = ({value}) => {
    return (
        <div className={value >= 0 ? styles["margin-positive"] : styles["margin-negative"]}>
        {value}
      </div>
    );
  };
