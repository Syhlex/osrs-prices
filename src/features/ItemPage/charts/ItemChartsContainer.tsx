import React, { useEffect, useState } from 'react';
import { getTimeSeries } from 'api';
import { TimeSeriesPoint, Timestep } from 'api/types';
import { Card } from 'components';
import { Item } from 'context/Items/ItemsContext';
import { useRefresh } from 'hooks/useRefresh';
import { PriceChart } from './PriceChart';

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

  const { lowPriceTimeData, lowPriceData, highPriceTimeData, highPriceData } =
    timeSeriesData.reduce(
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
      <PriceChart
        lowPriceTimeData={lowPriceTimeData}
        lowPriceData={lowPriceData}
        highPriceTimeData={highPriceTimeData}
        highPriceData={highPriceData}
      />
      <Card>Volume</Card>
    </div>
  );
};
