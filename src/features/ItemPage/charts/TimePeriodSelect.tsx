import React from 'react';
import { Select, SelectOption } from 'components/Select/Select';
import { TimePeriodInDays } from './ItemChartsContainer';

const options: SelectOption<TimePeriodInDays>[] = [
  { label: '1 day', value: 1 },
  { label: '7 days', value: 7 },
  { label: '30 days', value: 30 },
  { label: '1 year', value: 365 },
];

export interface TimePeriodSelectProps {
  onSelect: (timePeriod: TimePeriodInDays) => void;
}

export const TimePeriodSelect = (props: TimePeriodSelectProps) => {
  return (
    <Select
      buttonVariant="primary"
      options={options}
      onSelect={(selectedOption) => {
        props.onSelect(selectedOption.value);
      }}
    />
  );
};