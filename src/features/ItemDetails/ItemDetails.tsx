import React from 'react';
import { Button, Icon, IconName } from 'components';

export interface ItemDetails {
  id: string;
  name: string;
}

export const ItemDetails = (props: ItemDetails) => {
  return (
    <div>
      {`${props.name} (Item ID: ${props.id})`}
      <Button
        variant="nav"
        onClick={() => {
          window.open(
            `https://oldschool.runescape.wiki/w/Special:Lookup?type=item&id=${props.id}`,
          );
        }}
      >
        Wiki
      </Button>
      <Button
        variant="nav"
        onClick={() => {
          window.open(
            `https://secure.runescape.com/m=itemdb_oldschool/viewitem?obj=${props.id}`,
          );
        }}
      >
        GEDB
      </Button>
      <Button variant="nav">
        <Icon name={IconName.Copy} />
      </Button>
      <Button variant="nav">
        <Icon name={IconName.Heart} />
      </Button>
    </div>
  );
};
