import React, { useEffect, useState } from 'react';
import { getTimeSeries } from 'api';
import { GetTimeSeriesResponse, Timestep } from 'api/types';
import { Card } from 'components';
import { Item } from 'context/Items/ItemsContext';
import { ItemPriceChart } from './priceChart/ItemPriceChart';

export interface ItemChartsContainerProps {
  item: Item;
}

export const ItemChartsContainer = ({ item }: ItemChartsContainerProps) => {
  const [timestep, setTimestep] = useState<Timestep>('5m');
  const [timeSeriesData, setTimeSeriesData] = useState<GetTimeSeriesResponse>();

  useEffect(() => {
    // TODO: Needs to be wired with the refresh button
    getTimeSeries(item.id.toString(), timestep).then((response) => {
      setTimeSeriesData(response);
    });
  }, [item.id, timestep]);

  if (!timeSeriesData) {
    return <div>Loading...</div>;
  }

  const {
    timeData,
    lowPriceData,
    highPriceData,
    lowVolumeData,
    highVolumeData,
  } = timeSeriesData.data.reduce(
    (
      acc: {
        timeData: number[];
        lowPriceData: number[];
        highPriceData: number[];
        highVolumeData: number[];
        lowVolumeData: number[];
      },
      dataPoint,
    ) => {
      if (dataPoint.avgHighPrice && dataPoint.avgLowPrice) {
        acc.timeData.push(dataPoint.timestamp);
        acc.lowPriceData.push(dataPoint.avgLowPrice);
        acc.highPriceData.push(dataPoint.avgHighPrice);
        acc.lowVolumeData.push(dataPoint.lowPriceVolume);
        acc.highVolumeData.push(dataPoint.highPriceVolume);
      }
      return acc;
    },
    {
      timeData: [],
      lowPriceData: [],
      highPriceData: [],
      lowVolumeData: [],
      highVolumeData: [],
    },
  );

  const timeDataInMilliseconds = timeData.map((unixTimestamp) => {
    return unixTimestamp * 1000;
  });

  return (
    <div>
      <div>Timestep Select</div>
      <ItemPriceChart
        timeData={timeDataInMilliseconds}
        lowPriceData={lowPriceData}
        highPriceData={highPriceData}
      />
      <Card>Volume</Card>
    </div>
  );
};
