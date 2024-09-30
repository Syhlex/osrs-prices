import React from 'react';
import { ButtonProps, Dropdown, DropdownOption } from 'components';

export interface SelectProps<T> {
  buttonVariant: ButtonProps['variant'];
  options: DropdownOption<T>[];
  label: string | undefined;
  onSelect: (selectedOption: DropdownOption<T>) => void;
}

export const Select = <T extends unknown>({
  buttonVariant,
  options,
  label,
  onSelect,
}: SelectProps<T>) => (
  <Dropdown
    buttonVariant={buttonVariant}
    buttonText={label}
    options={options}
    onSelect={(option) => {
      onSelect(option);
    }}
  />
);
