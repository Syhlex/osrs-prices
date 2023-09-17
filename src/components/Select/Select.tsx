import React, { useEffect, useState } from 'react';
import { ButtonProps } from 'components/Button/Button';
import { Dropdown, DropdownOption } from 'components/Dropdown/Dropdown';

export interface SelectProps<T> {
  buttonVariant: ButtonProps['variant'];
  options: DropdownOption<T>[];
  onSelect: (selectedOption: DropdownOption<T>) => void;
}

export const Select = <T extends unknown>(props: SelectProps<T>) => {
  const [selected, setSelected] = useState<DropdownOption<T>>();

  useEffect(() => {
    if (props.options.length) {
      setSelected(props.options[0]);
    }
  }, [props.options]);

  const onSelectOption = (option: DropdownOption<T>) => {
    setSelected(option);
    props.onSelect(option);
  };

  return (
    <Dropdown
      buttonVariant={props.buttonVariant}
      buttonText={selected?.label ?? ''}
      options={props.options}
      onSelect={onSelectOption}
    />
  );
};
