import React, { useMemo } from 'react';
import freeToPlayImg from 'assets/images/free-to-play.png';
import membersImg from 'assets/images/members.png';
import { Button, Icon, IconName } from 'components';
import { Item } from 'context/Items/ItemsContext';
import { getItemImageSource } from 'utils/itemImage.utils';
import { getItemDetails } from 'utils/itemDetails.utils';
import styles from './ItemTable.mod.scss';

export interface ItemTableProps {
  items: Item[];
}

export const ItemTable = ({ items }: ItemTableProps) => {
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
          <th />
          <th>Name</th>
          <th>Buy limit</th>
          <th>Members</th>
          <th>Buy price</th>
          <th>Most recent buy</th>
          <th>Sell price</th>
          <th>Most recent sell</th>
          <th>Margin</th>
          <th>Daily volume</th>
          <th>Potential profit</th>
          <th>Margin * volume</th>
          <th />
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};
