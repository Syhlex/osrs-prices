import React, { ChangeEvent } from 'react';
import styles from './Autocomplete.mod.scss';
import classnames from 'classnames';

export interface AutocompleteOption {
  label: string;
  value: string;
  image: string;
}

export interface AutocompleteProps {
  value: string;
  options: AutocompleteOption[];
  placeholder?: string;
  classes?: Partial<{ autocomplete: string; input: string }>;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (option: AutocompleteOption) => void;
}

export const Autocomplete = (props: AutocompleteProps) => (
  <div className={classnames(styles.autocomplete, props.classes?.autocomplete)}>
    <input
      type="text"
      value={props.value}
      placeholder={props.placeholder}
      className={classnames(styles.input, props.classes?.input)}
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
