import React from 'react';
import { Dropdown, DropdownOption } from 'components/Dropdown/Dropdown';

const options: DropdownOption<string>[] = [
  { label: 'Alchemy', value: 'alchemy' },
  { label: 'Changelog', value: 'changelog' },
  { label: 'API', value: 'api' },
  { label: 'FAQs', value: 'faqs' },
];

export const MoreOptionsDropdown = () => {
  return <Dropdown buttonVariant="nav" buttonText="More" options={options} />;
};
