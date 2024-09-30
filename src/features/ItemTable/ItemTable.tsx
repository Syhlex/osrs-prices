import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import freeToPlayImg from 'assets/images/free-to-play.png';
import membersImg from 'assets/images/members.png';
import { Button, Icon, IconName } from 'components';
import { Item } from 'context/Items/ItemsContext';
import { getItemImageSource } from 'utils/itemImage.utils';
import { getItemDetails } from 'utils/itemDetails.utils';
import { ItemValues, SortDirection } from './ItemTableContainer';
import styles from './ItemTable.mod.scss';

export interface ItemTableProps {
  items: Item[];
  updateColumnSort: (columnName: keyof ItemValues) => void;
  sortedColumn?: keyof ItemValues;
  sortDirection: SortDirection;
  toggleFavourite: (itemId: number) => void;
  favourites: Set<number>;
}

const tableColumns: { label: string; value: keyof ItemValues }[] = [
  { label: 'Name', value: 'name' },
  { label: 'Buy limit', value: 'buyLimit' },
  { label: 'Members', value: 'members' },
  { label: 'Day change', value: 'dayChange' },
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
  favourites,
  toggleFavourite,
}: ItemTableProps) => {
  const tableRows = useMemo(
    () =>
      items.map((item) => {
        const {
          buyLimit,
          dayChange,
          dayChangeText,
          buyPrice,
          lastBuyTrade,
          sellPrice,
          lastSellTrade,
          marginText,
          volumeText,
          potentialProfit,
          marginTimesVolume,
        } = getItemDetails(item);

        const getNumberClass = (number: number) => {
          if (isNaN(number)) {
            return styles.grey;
          }
          return number >= 0 ? styles.positive : styles.negative;
        };

        return (
          <tr>
            <td className={styles.imageCell}>
              <img src={getItemImageSource(item.icon)} alt={item.name} />
            </td>
            <td>
              <Link to={`/item/${item.id}`}>{item.name}</Link>
            </td>
            <td>{buyLimit}</td>
            <td className={styles.imageCell}>
              <img
                src={item.members ? membersImg : freeToPlayImg}
                alt={item.members ? 'Members-only' : 'Free-to-play'}
              />
            </td>
            <td className={dayChange ? getNumberClass(dayChange) : styles.grey}>
              {dayChangeText}
            </td>
            <td>{buyPrice}</td>
            <td className={styles.grey}>{lastBuyTrade}</td>
            <td>{sellPrice}</td>
            <td className={styles.grey}>{lastSellTrade}</td>
            <td className={getNumberClass(parseInt(marginText))}>
              {marginText}
            </td>
            <td>{volumeText}</td>
            <td className={getNumberClass(parseInt(potentialProfit))}>
              {potentialProfit}
            </td>
            <td className={getNumberClass(parseInt(marginTimesVolume))}>
              {marginTimesVolume}
            </td>
            <td>
              <Button
                variant={
                  favourites.has(item.id) ? 'favouriteOn' : 'favouriteOff'
                }
                onClick={() => {
                  toggleFavourite(item.id);
                }}
              >
                <Icon name={IconName.Heart} />
              </Button>
            </td>
          </tr>
        );
      }),
    [items],
  );

  return (
    <div className={styles.overflowWrapper}>
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
    </div>
  );
};
