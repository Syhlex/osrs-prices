import React from 'react';
import classNames from 'classnames';
import { Button, Card, Icon, IconName } from 'components';
import { getItemImageSource } from 'utils/itemImage.utils';
import { minutesAgo } from 'utils/time.utils';
import { Item } from 'context/Items/ItemsContext';
import buyIcon from 'assets/images/buy-icon.png';
import sellIcon from 'assets/images/sell-icon.png';
import styles from './ItemDetails.mod.scss';

export interface ItemDetails {
  item: Item;
}

export const ItemDetails = ({ item }: ItemDetails) => {
  const buyPrice =
    item.high !== undefined ? `${item.high} coins` : 'Not available';
  const sellPrice =
    item.low !== undefined ? `${item.low} coins` : 'Not available';
  const lastBuyTrade =
    item.highTime !== undefined
      ? `${minutesAgo(item.highTime)} minutes ago`
      : 'Not available';
  const lastSellTrade =
    item.lowTime !== undefined
      ? `${minutesAgo(item.lowTime)} minutes ago`
      : 'Not available';
  const volume = item.volume ?? 'Not available';
  const margin =
    item.high !== undefined && item.low !== undefined
      ? item.high - item.low
      : 'Not available';
  const potentialProfit =
    typeof margin === 'number' && typeof item.limit === 'number'
      ? margin * item.limit
      : 'Not available';
  const marginTimesVolume =
    typeof margin === 'number' && typeof volume === 'number'
      ? margin * volume
      : 'Not available';
  const ROI =
    typeof margin === 'number' && typeof item.low === 'number'
      ? `${((margin / item.low) * 100).toFixed(2)}%`
      : 'Not available';
  const buyLimit = item.limit ?? 'Unknown';
  const highAlchProfit = item.low ? ` (${item.highalch - item.low})` : '';
  const highAlch = `${item.highalch}${highAlchProfit}`;

  const navigateToWiki = () => {
    window.open(
      `https://oldschool.runescape.wiki/w/Special:Lookup?type=item&id=${item.id}`,
    );
  };

  const navigateToGEDB = () => {
    window.open(
      `https://secure.runescape.com/m=itemdb_oldschool/viewitem?obj=${item.id}`,
    );
  };

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className={styles.itemDetails}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <img src={getItemImageSource(item.icon)} alt={item.name} />
          <h3 className={styles.itemName}>{item.name}</h3>
          <span className={styles.itemId}>{`(Item ID: ${item.id})`}</span>
        </div>
        <div className={styles.actionBar}>
          <Button variant="primary" onClick={navigateToWiki}>
            Wiki
          </Button>
          <Button variant="primary" onClick={navigateToGEDB}>
            GEDB
          </Button>
          <Button variant="secondary" onClick={copyUrlToClipboard}>
            <Icon name={IconName.Copy} />
          </Button>
          <Button variant="secondary">
            <Icon name={IconName.Heart} />
          </Button>
        </div>
      </div>
      <div className={styles.detailsSection}>
        <div className={styles.detailsBox}>
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
        <div className={styles.detailsBox}>
          <div className={styles.title}>Daily volume: {volume}</div>
          <div className={classNames(styles.subtitle, styles.grey)}>
            Based on the official OSRS GEDB
          </div>
          <div className={styles.title}>Margin: {margin}</div>
          <div className={styles.titleSmall}>
            Potential profit: {potentialProfit}
          </div>
          <div className={styles.titleSmall}>
            Margin * volume: {marginTimesVolume}
          </div>
          <div className={styles.title}>ROI: {ROI}</div>
        </div>
        <div className={styles.detailsBox}>
          <div>Buy limit {buyLimit}</div>
          <div>High alch {highAlch}</div>
          <div>Low alch {item.lowalch}</div>
          <div>Members</div>
          <div>Examine {item.examine}</div>
        </div>
      </div>
      <Card>Price</Card>
      <Card>Volume</Card>
    </div>
  );
};
