import React, { ChangeEvent, useState } from 'react';
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
  classes?: { autocomplete?: string; input?: string };
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (option: AutocompleteOption) => void;
}

export const Autocomplete = (props: AutocompleteProps) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      className={classnames(styles.autocomplete, props.classes?.autocomplete)}
      onFocus={() => setShowOptions(true)}
      onBlur={() => setShowOptions(false)}
    >
      <input
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        className={classnames(styles.input, props.classes?.input)}
        onChange={props.onInputChange}
      />
      {showOptions && (
        <ul className={styles.autocompleteOptions}>
          {props.options.map((option) => (
            <li
              className={styles.autocompleteItem}
              key={option.value}
              onMouseDown={(e) => {
                e.preventDefault(); // prevent blur event which prevents onClick from firing
              }}
              onClick={() => {
                props.onSelect(option);
                setShowOptions(false);
              }}
            >
              <span className={styles.autocompleteItemImage}>
                <img src={option.image} alt={option.label} />
              </span>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
