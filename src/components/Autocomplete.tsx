import React, { ChangeEvent } from 'react';
import styles from './Autocomplete.mod.scss';

export interface AutocompleteOption {
  label: string;
  value: string;
  image: string;
}

export interface AutocompleteProps {
  value: string;
  options: AutocompleteOption[];
  placeholder?: string;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (option: AutocompleteOption) => void;
}

export const Autocomplete = (props: AutocompleteProps) => (
  <div>
    <input
      type="text"
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onInputChange}
    />
    <ul className={styles.autocompleteOptions}>
      {props.options.map((option) => (
        <li
          className={styles.autocompleteItem}
          key={option.value}
          onClick={() => {
            props.onSelect(option);
          }}
        >
          <img src={option.image} alt={option.label} />
          {option.label}
        </li>
      ))}
    </ul>
  </div>
);
