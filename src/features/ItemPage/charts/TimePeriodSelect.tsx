import React from 'react';
import { DropdownOption, Select } from 'components';
import { TimePeriodInDays } from './ItemChartsContainer';

const options: DropdownOption<TimePeriodInDays>[] = [
  { label: '1 day', value: 1 },
  { label: '7 days', value: 7 },
  { label: '30 days', value: 30 },
  { label: '1 year', value: 365 },
];

const getLabel = (timePeriod: TimePeriodInDays) =>
  ({ 1: '1 day', 7: '7 days', 30: '30 days', 365: '1 year' }[timePeriod]);

export interface TimePeriodSelectProps {
  timePeriod: TimePeriodInDays;
  onSelect: (timePeriod: TimePeriodInDays) => void;
}

export const TimePeriodSelect = (props: TimePeriodSelectProps) => {
  return (
    <Select
      buttonVariant="primary"
      options={options}
      label={getLabel(props.timePeriod)}
      onSelect={(selectedOption) => {
        props.onSelect(selectedOption.value);
      }}
    />
  );
};
