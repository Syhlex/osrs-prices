import React from 'react';
import styles from './FilterInput.mod.scss';

export interface FilterInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const FilterInput = ({
  placeholder,
  value,
  onChange,
}: FilterInputProps) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};
