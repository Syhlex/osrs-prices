import React, { useContext, useMemo } from 'react';
import { Table } from 'components/Table/Table';
import { ItemsContext } from 'context/Items/ItemsContext';
import styles from './HomeTables.mod.scss';
import { ColDef } from 'ag-grid-community';
import { addCommas, getMarginCellClass } from './TableUtilFunctions';

const columnDefs: ColDef[] = [
  {
    field: 'item',
  },
  {
    field: 'members',
  },
  {
    field: 'buyLimit',
    valueFormatter: addCommas,
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
    cellClass: getMarginCellClass,
  },
  {
    field: 'dailyVolume',
    valueFormatter: addCommas,
  },
];

export const HighestDailyVolumeTable = () => {
  const { itemRows } = useContext(ItemsContext);

  const highestVolumeRowData = useMemo(() => {
    return [...itemRows]
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
  }, [itemRows]);

  return (
    <Table
      columnDefs={columnDefs}
      rowData={highestVolumeRowData}
      styleProps={{ container: styles.container }}
      onModelUpdated={(e) => {
        e.api.sizeColumnsToFit({
          columnLimits: [{ key: 'item', minWidth: 280 }],
        });
      }}
    />
  );
};
