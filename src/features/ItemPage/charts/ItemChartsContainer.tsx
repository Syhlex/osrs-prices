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

  const { lowPriceTimeData, lowPriceData, highPriceTimeData, highPriceData } =
    timeSeriesData.data.reduce(
      (
        acc: {
          lowPriceTimeData: number[];
          lowPriceData: number[];
          highPriceTimeData: number[];
          highPriceData: number[];
        },
        dataPoint,
      ) => {
        if (dataPoint.avgLowPrice) {
          acc.lowPriceTimeData.push(dataPoint.timestamp * 1000);
          acc.lowPriceData.push(dataPoint.avgLowPrice);
        }
        if (dataPoint.avgHighPrice) {
          acc.highPriceTimeData.push(dataPoint.timestamp * 1000);
          acc.highPriceData.push(dataPoint.avgHighPrice);
        }
        return acc;
      },
      {
        lowPriceTimeData: [],
        lowPriceData: [],
        highPriceData: [],
        highPriceTimeData: [],
      },
    );

  return (
    <div>
      <div>Timestep Select</div>
      <ItemPriceChart
        lowPriceTimeData={lowPriceTimeData}
        lowPriceData={lowPriceData}
        highPriceTimeData={highPriceTimeData}
        highPriceData={highPriceData}
      />
      <Card>Volume</Card>
    </div>
  );
};
