import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownOption } from 'components/Dropdown/Dropdown';

export const MoreOptionsDropdown = () => {
  const navigate = useNavigate();

  const navigateToAlchemy = () => {
    navigate('/alchemy');
  };

  const navigateToApi = () => {
    window.open(
      'https://oldschool.runescape.wiki/w/RuneScape:Real-time_Prices',
    );
  };

  const navigateToChangelog = () => {
    navigate('/changelog');
  };

  const navigateToFaqs = () => {
    navigate('/faqs');
  };

  const options: DropdownOption<string>[] = [
    { label: 'Alchemy', value: 'alchemy', action: navigateToAlchemy },
    { label: 'Changelog', value: 'changelog', action: navigateToChangelog },
    { label: 'API', value: 'api', action: navigateToApi },
    { label: 'FAQs', value: 'faqs', action: navigateToFaqs },
  ];

  return <Dropdown buttonVariant="nav" buttonText="More" options={options} />;
};
