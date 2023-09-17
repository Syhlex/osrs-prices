import React, { ReactNode, useState } from 'react';
import { Button, ButtonProps } from 'components/Button/Button';
import { Icon, IconName } from 'components/Icon/Icon';
import styles from './Dropdown.mod.scss';

export interface DropdownOption<T> {
  label: string | ReactNode;
  value: T;
  action?: () => void;
}

export interface DropdownProps<T> {
  buttonVariant: ButtonProps['variant'];
  buttonText: string | ReactNode;
  options: DropdownOption<T>[];
  onSelect?: (selectedOption: DropdownOption<T>) => void;
}

export const Dropdown = <T extends unknown>({
  buttonVariant,
  buttonText,
  options,
  onSelect,
}: DropdownProps<T>) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onBlur = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdown} onBlur={onBlur}>
      <Button variant={buttonVariant} onClick={toggleMenu}>
        {buttonText}
        <Icon name={IconName.CaretDown} className={styles.caret} />
      </Button>
      {menuOpen && (
        <ul className={styles.menu}>
          {options.map((option, index) => (
            <li
              className={styles.listItem}
              key={index}
              onClick={() => {
                option.action?.();
                onSelect?.(option);
                setMenuOpen(false);
              }}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
