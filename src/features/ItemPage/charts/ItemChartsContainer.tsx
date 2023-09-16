import React, { useEffect, useState } from 'react';
import { getTimeSeries } from 'api';
import { TimeSeriesPoint, Timestep } from 'api/types';
import { Item } from 'context/Items/ItemsContext';
import { useRefresh } from 'hooks/useRefresh';
import { PriceChart } from './PriceChart';
import { VolumeChart } from './VolumeChart';

export interface ItemChartsContainerProps {
  item: Item;
}

export const ItemChartsContainer = ({ item }: ItemChartsContainerProps) => {
  const [timestep, setTimestep] = useState<Timestep>('5m');
  const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesPoint[]>([]);
  const { setRefreshAction } = useRefresh();

  useEffect(() => {
    const fetchTimeSeries = () => {
      getTimeSeries(item.id, timestep).then((response) => {
        setTimeSeriesData(response.data);
      });
    };
    fetchTimeSeries();
    setRefreshAction(() => () => {
      fetchTimeSeries();
    });
  }, [item.id, timestep]);

  const {
    lowPriceTimes,
    lowPrices,
    highPriceTimes,
    highPrices,
    volumeTimes,
    lowVolumes,
    highVolumes,
  } = timeSeriesData.reduce(
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
      dataPoint,
    ) => {
      if (dataPoint.avgLowPrice) {
        acc.lowPriceTimes.push(dataPoint.timestamp * 1000);
        acc.lowPrices.push(dataPoint.avgLowPrice);
      }
      if (dataPoint.avgHighPrice) {
        acc.highPriceTimes.push(dataPoint.timestamp * 1000);
        acc.highPrices.push(dataPoint.avgHighPrice);
      }
      acc.volumeTimes.push(dataPoint.timestamp * 1000);
      acc.lowVolumes.push(dataPoint.lowPriceVolume);
      acc.highVolumes.push(dataPoint.highPriceVolume);

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
    <div>
      <div>Timestep Select</div>
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
