import React, { useEffect, useState } from 'react';
import { getTimeSeries } from 'api';
import { TimeSeriesPoint, Timestep } from 'api/types';
import { Item } from 'context/Items/ItemsContext';
import { useRefresh } from 'hooks/useRefresh';
import { TimePeriodSelect } from './TimePeriodSelect';
import { PriceChart } from './PriceChart';
import { VolumeChart } from './VolumeChart';

export type TimePeriodInDays = 1 | 7 | 30 | 365;

const timePeriodToTimestep: { [period in TimePeriodInDays]: Timestep } = {
  1: '5m',
  7: '1h',
  30: '6h',
  365: '24h',
};

const getTimePeriodInMs = (timePeriod: TimePeriodInDays) => {
  return timePeriod * 24 * 60 * 60 * 1000;
};

export interface ItemChartsContainerProps {
  item: Item;
}

export const ItemChartsContainer = ({ item }: ItemChartsContainerProps) => {
  const [timePeriod, setTimePeriod] = useState<TimePeriodInDays>(1);
  const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesPoint[]>([]);
  const { setRefreshAction } = useRefresh();

  useEffect(() => {
    const fetchTimeSeries = () => {
      const timestep = timePeriodToTimestep[timePeriod];
      getTimeSeries(item.id, timestep).then((response) => {
        setTimeSeriesData(response.data);
      });
    };
    fetchTimeSeries();
    setRefreshAction(() => () => {
      fetchTimeSeries();
    });
  }, [item.id, timePeriod]);

  const timeSeriesDataWithinTimePeriod = timeSeriesData.filter((datapoint) => {
    const timePeriodInMs = getTimePeriodInMs(timePeriod);
    const now = Date.now();
    const thresholdTimestamp = now - timePeriodInMs;
    return datapoint.timestamp * 1000 >= thresholdTimestamp;
  });

  const {
    lowPriceTimes,
    lowPrices,
    highPriceTimes,
    highPrices,
    volumeTimes,
    lowVolumes,
    highVolumes,
  } = timeSeriesDataWithinTimePeriod.reduce(
    (
      acc: {
        lowPriceTimes: number[];
        lowPrices: number[];
        highPriceTimes: number[];
        highPrices: number[];
        volumeTimes: number[];
        lowVolumes: number[];
        highVolumes: number[];
      },
      datapoint,
    ) => {
      if (datapoint.avgLowPrice) {
        acc.lowPriceTimes.push(datapoint.timestamp * 1000);
        acc.lowPrices.push(datapoint.avgLowPrice);
      }
      if (datapoint.avgHighPrice) {
        acc.highPriceTimes.push(datapoint.timestamp * 1000);
        acc.highPrices.push(datapoint.avgHighPrice);
      }
      acc.volumeTimes.push(datapoint.timestamp * 1000);
      acc.lowVolumes.push(datapoint.lowPriceVolume);
      acc.highVolumes.push(datapoint.highPriceVolume);

      return acc;
    },
    {
      lowPriceTimes: [],
      lowPrices: [],
      highPriceTimes: [],
      highPrices: [],
      volumeTimes: [],
      lowVolumes: [],
      highVolumes: [],
    },
  );

  return (
    <div style={{ textAlign: 'right' }}>
      <TimePeriodSelect
        onSelect={(timePeriod) => {
          setTimePeriod(timePeriod);
        }}
      />
      <PriceChart
        lowTimes={lowPriceTimes}
        lowPrices={lowPrices}
        highTimes={highPriceTimes}
        highPrices={highPrices}
      />
      <VolumeChart
        timestamps={volumeTimes}
        lowVolumes={lowVolumes}
        highVolumes={highVolumes}
      />
    </div>
  );
};
