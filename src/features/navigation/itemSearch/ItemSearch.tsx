import React, { ChangeEvent, useContext, useState } from 'react';
import {
  Autocomplete,
  AutocompleteOption,
} from 'components/Autocomplete/Autocomplete';
import { ItemsContext } from 'context/Items/ItemsContext';
import styles from './ItemSearch.mod.scss';

const ITEM_IMAGE_URL = 'https://oldschool.runescape.wiki/images/';

export const ItemSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const { itemRows } = useContext(ItemsContext);

  const allOptions = itemRows.map((item) => ({
    label: item.name,
    value: item.id.toString(),
    // Unescapes characters then replaces ' ' with '_'
    // eg. Bullseye%20lantern.png -> Bullseye_lantern.png
    image: `${ITEM_IMAGE_URL}${decodeURIComponent(item.icon).replace(
      / /g,
      '_',
    )}`,
  }));

  const suggestions =
    inputValue === ''
      ? []
      : allOptions
          .filter((option) => option.label.includes(inputValue))
          .slice(0, 10);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSelect = (option: AutocompleteOption) => {
    console.log('Selected option: ', option);
  };

  return (
    <Autocomplete
      placeholder="Search for an item..."
      value={inputValue}
      options={suggestions}
      classes={{ autocomplete: styles.autocomplete }}
      onInputChange={handleInputChange}
      onSelect={handleSelect}
    />
  );
};
