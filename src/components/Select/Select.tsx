import React, { useEffect, useState } from 'react';
import { Button, ButtonProps } from 'components/Button/Button';
import styles from './Select.mod.scss';

export interface SelectOption<T> {
  label: string;
  value: T;
}

export interface SelectProps<T> {
  buttonVariant: ButtonProps['variant'];
  options: SelectOption<T>[];
  onSelect: (selectedOption: SelectOption<T>) => void;
}

export const Select = <T extends {}>(props: SelectProps<T>) => {
  const [selected, setSelected] = useState<SelectOption<T>>();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (props.options.length) {
      setSelected(props.options[0]);
    }
  }, [props.options]);

  const toggleDropdown = () => {
    setMenuOpen((prev) => !prev);
  };

  const onSelectOption = (option: SelectOption<T>) => {
    setSelected(option);
    props.onSelect(option);
    setMenuOpen(false);
  };

  return (
    <div
      className={styles.select}
      onBlur={() => {
        setMenuOpen(false);
      }}
    >
      <Button variant={props.buttonVariant} onClick={toggleDropdown}>
        {selected?.label}&#9660;
      </Button>
      {menuOpen && (
        <ul className={styles.dropdown}>
          {props.options.map((option, index) => {
            return (
              <li
                className={styles.listItem}
                key={index}
                onClick={() => {
                  onSelectOption(option);
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
