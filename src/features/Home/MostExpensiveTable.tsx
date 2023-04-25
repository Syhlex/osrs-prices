import React, { useContext, useMemo } from 'react';
import { Table } from 'components/Table/Table';
import { ColDef } from 'ag-grid-community';
import { ItemsContext } from 'context/Items/ItemsContext';
import styles from './HomeTables.mod.scss';

const columnDefs: ColDef[] = [
  {
    field: 'item',
  },
  {
    field: 'members',
  },
  {
    field: 'buyLimit',
  },
  {
    field: 'buyPrice',
  },
  {
    field: 'sellPrice',
  },
  {
    field: 'margin',
    valueGetter: (params) => {
      return params.data.buyPrice - params.data.sellPrice;
    },
  },
  {
    field: 'dailyVolume',
  },
];

export const MostExpensiveTable = () => {
  const { rowData } = useContext(ItemsContext);

  const mostExpensiveRowData = useMemo(() => {
    return [...rowData]
      .sort((a, b) => {
        if (a.high === b.high) {
          return 0;
        } else if (a.high === undefined) {
          return 1;
        } else if (b.high === undefined) {
          return -1;
        } else {
          return a.high > b.high ? -1 : 1;
        }
      })
      .splice(0, 15)
      .map((data) => ({
        item: data.name,
        members: data.members,
        buyLimit: data.limit,
        buyPrice: data.high,
        sellPrice: data.low,
        dailyVolume: data.volume,
      }));
  }, [rowData]);

  return (
    <Table
      columnDefs={columnDefs}
      rowData={mostExpensiveRowData}
      styleProps={{ container: styles.container }}
    />
  );
};
