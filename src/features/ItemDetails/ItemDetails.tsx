import React from 'react';
import { Button, Card, Icon, IconName } from 'components';
import { getItemImageSource } from 'utils/itemImage.utils';
import { Item } from 'context/Items/ItemsContext';
import styles from './ItemDetails.mod.scss';

export interface ItemDetails {
  item: Item;
}

export const ItemDetails = ({ item }: ItemDetails) => {
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
          <div>Buy Price:</div>
          <div>Last trade:</div>
          <div>Sell Price:</div>
          <div>Last trade:</div>
        </div>
        <div className={styles.detailsBox}>
          <div>Daily volume:</div>
          <div>Based on the official OSRS GEDB</div>
          <div>Margin:</div>
          <div>Potential profit:</div>
          <div>Margin * volume:</div>
          <div>ROI:</div>
        </div>
        <div className={styles.detailsBox}>
          <div>Buy limit</div>
          <div>High alch</div>
          <div>Low alch</div>
          <div>Members</div>
          <div>Examine</div>
        </div>
      </div>
      <Card>Price</Card>
      <Card>Volume</Card>
    </div>
  );
};
