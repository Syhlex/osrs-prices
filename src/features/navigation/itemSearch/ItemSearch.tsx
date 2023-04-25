import { Autocomplete, AutocompleteOption } from 'components/Autocomplete';
import { ItemsContext } from 'context/Items/ItemsContext';
import React, { ChangeEvent, useContext, useState } from 'react';

const ITEM_IMAGE_URL = 'https://oldschool.runescape.wiki/images/';

export const ItemSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const { rowData } = useContext(ItemsContext);

  const allOptions = rowData.map((item) => ({
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
      onInputChange={handleInputChange}
      onSelect={handleSelect}
    />
  );
};
