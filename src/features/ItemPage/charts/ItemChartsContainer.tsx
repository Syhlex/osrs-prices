import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getTimeSeries } from 'api';
import { TimeSeriesPoint, Timestep } from 'api/types';
import { Item } from 'context/Items/ItemsContext';
import { useRefresh } from 'hooks/useRefresh';
import { ItemCharts } from './ItemCharts';

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

  const onTimePeriodSelect = useCallback(
    (timePeriod: TimePeriodInDays) => {
      setTimePeriod(timePeriod);
    },
    [setTimePeriod],
  );

  const timeSeriesDataWithinTimePeriod = useMemo(() => {
    return timeSeriesData.filter((datapoint) => {
      const timePeriodInMs = getTimePeriodInMs(timePeriod);
      const now = Date.now();
      const thresholdTimestamp = now - timePeriodInMs;
      return datapoint.timestamp * 1000 >= thresholdTimestamp;
    });
  }, [timeSeriesData]);

  const { priceData, volumeData } = timeSeriesDataWithinTimePeriod.reduce(
    (
      acc: {
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
      },
      datapoint,
    ) => {
      const { priceData, volumeData } = acc;
      if (datapoint.avgLowPrice) {
        priceData.lowTimes.push(datapoint.timestamp * 1000);
        priceData.lowPrices.push(datapoint.avgLowPrice);
      }
      if (datapoint.avgHighPrice) {
        priceData.highTimes.push(datapoint.timestamp * 1000);
        priceData.highPrices.push(datapoint.avgHighPrice);
      }
      volumeData.timestamps.push(datapoint.timestamp * 1000);
      volumeData.lowVolumes.push(datapoint.lowPriceVolume);
      volumeData.highVolumes.push(datapoint.highPriceVolume);

      return acc;
    },
    {
      priceData: {
        lowTimes: [],
        lowPrices: [],
        highTimes: [],
        highPrices: [],
      },
      volumeData: {
        timestamps: [],
        lowVolumes: [],
        highVolumes: [],
      },
    },
  );

  return (
    <ItemCharts
      timePeriod={timePeriod}
      onTimePeriodSelect={onTimePeriodSelect}
      priceData={priceData}
      volumeData={volumeData}
    />
  );
};
