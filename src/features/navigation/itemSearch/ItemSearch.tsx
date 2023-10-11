import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, AutocompleteOption } from 'components';
import { useItems } from 'hooks/useItems';
import { getItemImageSource } from 'utils/itemImage.utils';
import styles from './ItemSearch.mod.scss';

export const ItemSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const { items } = useItems();
  const navigate = useNavigate();

  const allOptions = items.map((item) => ({
    label: item.name,
    value: item.id.toString(),
    image: getItemImageSource(item.icon),
  }));

  const suggestions =
    inputValue === ''
      ? []
      : allOptions
          .filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase()),
          )
          .slice(0, 10);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSelect = (option: AutocompleteOption) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setInputValue('');
    navigate(`/item/${option.value}`);
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
