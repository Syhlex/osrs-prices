import React, { useContext, useMemo } from 'react';
import { Table } from 'components/Table/Table';
import { ItemsContext } from 'context/Items/ItemsContext';
import styles from './HomeTables.mod.scss';
import { ColDef } from 'ag-grid-community';

const columnDefs: ColDef[] = [
  {
    field: 'item',
  },
  {
    field: 'members',
    width: 80,
  },
  {
    field: 'buyLimit',
    width: 80,
  },
  {
    field: 'buyPrice',
    width: 100,
  },
  {
    field: 'sellPrice',
    width: 100,
  },
  {
    field: 'margin',
    width: 86,
    valueGetter: (params) => {
      return params.data.buyPrice - params.data.sellPrice;
    },
  },
  {
    field: 'dailyVolume',
    width: 103,
  },
];

export const HighestDailyVolumeTable = () => {
  const { rowData } = useContext(ItemsContext);

  const highestVolumeRowData = useMemo(() => {
    return [...rowData]
      .sort((a, b) => {
        if (a.volume === b.volume) {
          return 0;
        } else if (a.volume === undefined) {
          return 1;
        } else if (b.volume === undefined) {
          return -1;
        } else {
          return a.volume > b.volume ? -1 : 1;
        }
      })
      .splice(0, 15)
      .map((data) => {
        return {
          item: data.name,
          members: data.members,
          buyLimit: data.limit,
          buyPrice: data.high,
          sellPrice: data.low,
          dailyVolume: data.volume,
        };
      });
  }, [rowData]);

  return (
    <Table
      columnDefs={columnDefs}
      rowData={highestVolumeRowData}
      styleProps={{ container: styles.container }}
    />
  );
};
