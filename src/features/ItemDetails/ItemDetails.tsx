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
          <Button variant="nav" onClick={navigateToWiki}>
            Wiki
          </Button>
          <Button variant="nav" onClick={navigateToGEDB}>
            GEDB
          </Button>
          <Button variant="nav" onClick={copyUrlToClipboard}>
            <Icon name={IconName.Copy} />
          </Button>
          <Button variant="nav">
            <Icon name={IconName.Heart} />
          </Button>
        </div>
      </div>
      <Card>Price</Card>
      <Card>Volume</Card>
    </div>
  );
};
