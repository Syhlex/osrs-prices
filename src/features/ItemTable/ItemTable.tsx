import React, { useMemo } from 'react';
import freeToPlayImg from 'assets/images/free-to-play.png';
import membersImg from 'assets/images/members.png';
import { Button, Icon, IconName } from 'components';
import { getItemImageSource } from 'utils/itemImage.utils';
import { getItemDetails } from 'utils/itemDetails.utils';
import styles from './ItemTable.mod.scss';
import { Item } from 'context/Items/ItemsContext';
import { ItemValues, SortDirection } from 'features/AllItems/AllItems';

export interface ItemTableProps {
  items: Item[];
  updateColumnSort: (columnName: keyof ItemValues) => void;
  sortedColumn?: keyof ItemValues;
  sortDirection: SortDirection;
}

const tableColumns: { label: string; value: keyof ItemValues }[] = [
  { label: 'Name', value: 'name' },
  { label: 'Buy limit', value: 'buyLimit' },
  { label: 'Members', value: 'members' },
  { label: 'Buy price', value: 'buyPrice' },
  { label: 'Most recent buy', value: 'lastBuyTime' },
  { label: 'Sell price', value: 'sellPrice' },
  { label: 'Most recent sell', value: 'lastSellTime' },
  { label: 'Margin', value: 'margin' },
  { label: 'Daily volume', value: 'volume' },
  { label: 'Potential profit', value: 'potentialProfit' },
  { label: 'Margin * volume', value: 'marginTimesVolume' },
];

export const ItemTable = ({
  items,
  updateColumnSort,
  sortedColumn,
  sortDirection,
}: ItemTableProps) => {
  const tableRows = useMemo(
    () =>
      items.map((item) => {
        const {
          buyLimit,
          buyPrice,
          lastBuyTrade,
          sellPrice,
          lastSellTrade,
          marginText,
          volumeText,
          potentialProfit,
          marginTimesVolume,
        } = getItemDetails(item);

        return (
          <tr>
            <td className={styles.imageCell}>
              <img src={getItemImageSource(item.icon)} alt={item.name} />
            </td>
            <td>{item.name}</td>
            <td>{buyLimit}</td>
            <td>
              <img
                src={item.members ? membersImg : freeToPlayImg}
                alt={item.members ? 'Members-only' : 'Free-to-play'}
              />
            </td>
            <td>{buyPrice}</td>
            <td>{lastBuyTrade}</td>
            <td>{sellPrice}</td>
            <td>{lastSellTrade}</td>
            <td>{marginText}</td>
            <td>{volumeText}</td>
            <td>{potentialProfit}</td>
            <td>{marginTimesVolume}</td>
            <td>
              <Button variant="primary">
                <Icon name={IconName.Heart} />
              </Button>
            </td>
          </tr>
        );
      }),
    [items],
  );

  return (
    <table className={styles.itemTable}>
      <thead>
        <tr>
          {/* item image */}
          <th />
          {tableColumns.map((column) => (
            <th
              className={styles.header}
              onClick={() => {
                updateColumnSort(column.value);
              }}
            >
              {column.label}
              {sortedColumn === column.value && (
                <Icon
                  name={
                    sortDirection === 'ascending'
                      ? IconName.SortUp
                      : IconName.SortDown
                  }
                  className={styles.sortIcon}
                />
              )}
            </th>
          ))}
          {/* favourite */}
          <th />
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};
