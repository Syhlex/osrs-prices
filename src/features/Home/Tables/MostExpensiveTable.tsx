import React, { useMemo } from 'react';
import { ColDef } from 'ag-grid-community';
import { Table } from 'components';
import { useItems } from 'hooks/useItems';
import { IsMembersItemRenderer, ItemRenderer } from './cellRenderers';
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
    cellRenderer: ItemRenderer,
  },
  {
    field: 'members',
    cellRenderer: IsMembersItemRenderer,
  },
  {
    field: 'buyLimit',
    valueFormatter: getChainedValueFormatter([addCommas, addUnknown]),
    cellClass: getBuyLimitCellClass,
  },
  {
    field: 'buyPrice',
    valueFormatter: addCommas,
  },
  {
    field: 'sellPrice',
    valueFormatter: addCommas,
  },
  {
    field: 'margin',
    valueGetter: (params) => {
      return params.data.buyPrice - params.data.sellPrice;
    },
    cellClass: getMarginCellClass,
    valueFormatter: addCommas,
  },
  {
    field: 'dailyVolume',
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
        item: { name: data.name, id: data.id, icon: data.icon },
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
      onModelUpdated={(e) => {
        e.api.sizeColumnsToFit({
          columnLimits: [
            { key: 'item', minWidth: 280 },
            { key: 'buyLimit', maxWidth: 105 },
            { key: 'buyPrice', minWidth: 150 },
            { key: 'sellPrice', minWidth: 150 },
          ],
        });
      }}
    />
  );
};
