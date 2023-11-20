import React from 'react';
import { Dropdown, DropdownOption } from 'components';

export const MoreOptionsDropdown = () => {
  const navigateToApi = () => {
    window.open(
      'https://oldschool.runescape.wiki/w/RuneScape:Real-time_Prices',
    );
  };

  const options: DropdownOption<string>[] = [
    { label: 'API', value: 'api', action: navigateToApi },
  ];

  return <Dropdown buttonVariant="nav" buttonText="More" options={options} />;
};
