import React from 'react';
import { Button, Icon, IconName } from 'components';
import { getItemImageSource } from 'utils/itemImage.utils';
import { Item } from 'context/Items/ItemsContext';
import styles from './ItemHeader.mod.scss';

export interface ItemHeaderProps {
  item: Item;
}

export const ItemHeader = ({ item }: ItemHeaderProps) => {
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
    <div className={styles.headerContainer}>
      <div className={styles.headerLeft}>
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
  );
};
