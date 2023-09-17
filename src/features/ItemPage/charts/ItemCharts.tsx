import React from 'react';
import { TimePeriodSelect } from './TimePeriodSelect';
import { PriceChart } from './PriceChart';
import { VolumeChart } from './VolumeChart';
import { TimePeriodInDays } from './ItemChartsContainer';
import styles from './ItemCharts.mod.scss';

export interface ItemChartsProps {
  onTimePeriodSelect: (timePeriod: TimePeriodInDays) => void;
  priceData: {
    lowTimes: number[];
    lowPrices: number[];
    highTimes: number[];
    highPrices: number[];
  };
  volumeData: {
    timestamps: number[];
    lowVolumes: number[];
    highVolumes: number[];
  };
}

export const ItemCharts = ({
  onTimePeriodSelect,
  priceData,
  volumeData,
}: ItemChartsProps) => {
  return (
    <div className={styles.itemCharts}>
      <TimePeriodSelect onSelect={onTimePeriodSelect} />
      <PriceChart
        lowTimes={priceData.lowTimes}
        lowPrices={priceData.lowPrices}
        highTimes={priceData.highTimes}
        highPrices={priceData.highPrices}
      />
      <VolumeChart
        timestamps={volumeData.timestamps}
        lowVolumes={volumeData.lowVolumes}
        highVolumes={volumeData.highVolumes}
      />
    </div>
  );
};
