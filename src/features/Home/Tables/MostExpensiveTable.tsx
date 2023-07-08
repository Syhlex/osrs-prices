import React, { useMemo } from 'react';
import { ColDef } from 'ag-grid-community';
import { Table } from 'components/Table/Table';
import { useItems } from 'hooks/useItems';
import { IsMembersItemRenderer } from './cellRenderers/IsMembersItem';
import {
  addCommas,
  addUnknown,
  getBuyLimitCellClass,
  getChainedValueFormatter,
  getMarginCellClass,
} from './TableUtilFunctions';
import styles from './HomeTables.mod.scss';

const columnDefs: ColDef[] = [
  {
    field: 'item',
  },
  {
    field: 'members',
    width: 80,
    cellRenderer: IsMembersItemRenderer,
  },
  {
    field: 'buyLimit',
    width: 80,
    valueFormatter: getChainedValueFormatter([addCommas, addUnknown]),
    cellClass: getBuyLimitCellClass,
  },
  {
    field: 'buyPrice',
    width: 100,
    valueFormatter: addCommas,
  },
  {
    field: 'sellPrice',
    width: 100,
    valueFormatter: addCommas,
  },
  {
    field: 'margin',
    width: 86,
    valueGetter: (params) => {
      return params.data.buyPrice - params.data.sellPrice;
    },
    cellClass: getMarginCellClass,
    valueFormatter: addCommas,
  },
  {
    field: 'dailyVolume',
    width: 103,
  },
];

export const MostExpensiveTable = () => {
  const { itemRows } = useItems();

  const mostExpensiveRowData = useMemo(() => {
    return [...itemRows]
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
  }, [itemRows]);

  return (
    <Table
      columnDefs={columnDefs}
      rowData={mostExpensiveRowData}
      styleProps={{ container: styles.container }}
    />
  );
};
