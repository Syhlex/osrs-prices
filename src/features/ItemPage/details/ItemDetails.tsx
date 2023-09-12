import React from 'react';
import classNames from 'classnames';
import { Item } from 'context/Items/ItemsContext';
import { minutesAgo } from 'utils/time.utils';
import buyIcon from 'assets/images/buy-icon.png';
import sellIcon from 'assets/images/sell-icon.png';
import styles from './ItemDetails.mod.scss';
import { addCommas } from 'utils/number.utils';

export interface ItemDetailsProps {
  item: Item;
}

export const ItemDetails = ({ item }: ItemDetailsProps) => {
  const buyPrice =
    item.high !== undefined ? `${addCommas(item.high)} coins` : 'Not available';
  const sellPrice =
    item.low !== undefined ? `${addCommas(item.low)} coins` : 'Not available';
  const lastBuyTrade =
    item.highTime !== undefined
      ? `${minutesAgo(item.highTime)} minutes ago`
      : 'Not available';
  const lastSellTrade =
    item.lowTime !== undefined
      ? `${minutesAgo(item.lowTime)} minutes ago`
      : 'Not available';

  const volume = item.volume;
  const volumeString =
    volume !== undefined ? addCommas(volume) : 'Not available';
  const margin =
    item.high !== undefined && item.low !== undefined
      ? item.high - item.low
      : undefined;
  const marginString =
    margin !== undefined ? addCommas(margin) : 'Not available';
  const potentialProfit =
    typeof margin === 'number' && typeof item.limit === 'number'
      ? addCommas(margin * item.limit)
      : 'Not available';
  const marginTimesVolume =
    typeof margin === 'number' && typeof volume === 'number'
      ? addCommas(margin * volume)
      : 'Not available';
  const ROI =
    typeof margin === 'number' && typeof item.low === 'number'
      ? `${((margin / item.low) * 100).toFixed(2)}%`
      : 'Not available';

  const buyLimit = item.limit ?? 'Unknown';
  const highAlchProfit = item.low
    ? ` (${addCommas(item.highalch - item.low)})`
    : '';
  const highAlch = `${addCommas(item.highalch)}${highAlchProfit}`;
  const lowAlch = addCommas(item.lowalch);

  return (
    <div className={styles.itemDetails}>
      <div className={styles.section}>
        <div className={styles.title}>
          <img
            src={buyIcon}
            alt="Buy price icon"
            className={styles.buySellIcon}
          />
          Buy price: {buyPrice}
        </div>
        <div className={styles.subtitle}>
          Last trade: <span className={styles.grey}>{lastBuyTrade}</span>
        </div>
        <div className={styles.title}>
          <img
            src={sellIcon}
            alt="Sell price icon"
            className={styles.buySellIcon}
          />
          Sell price: {sellPrice}
        </div>
        <div className={styles.subtitle}>
          Last trade: <span className={styles.grey}>{lastSellTrade}</span>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>Daily volume: {volumeString}</div>
        <div className={classNames(styles.subtitle, styles.grey)}>
          Based on the official OSRS GEDB
        </div>
        <div className={styles.title}>Margin: {marginString}</div>
        <div className={styles.titleSmall}>
          Potential profit: {potentialProfit}
        </div>
        <div className={styles.titleSmall}>
          Margin * volume: {marginTimesVolume}
        </div>
        <div className={styles.title}>ROI: {ROI}</div>
      </div>
      <div className={classNames(styles.section, styles.rightSection)}>
        <table>
          <tbody className={styles.table}>
            <tr>
              <td>Buy limit</td>
              <td>{buyLimit}</td>
            </tr>
            <tr>
              <td>High alch</td>
              <td>{highAlch}</td>
            </tr>
            <tr>
              <td>Low alch</td>
              <td>{lowAlch}</td>
            </tr>
            <tr>
              <td>Members</td>
              <td>{item.members.toString()}</td>
            </tr>
            <tr>
              <td>Examine</td>
              <td>{item.examine}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
