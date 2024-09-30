import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  get1HrAveragePrices,
  getItemDetails,
  getLatestPrices,
  getVolumes,
} from 'api';
import { ApiValues, Item, ItemsContext, ItemsMap } from './ItemsContext';

export interface ItemsProviderProps {
  children?: ReactNode;
}

export const ItemsProvider = ({ children }: ItemsProviderProps) => {
  const [rawData, setRawData] = useState<ApiValues>({
    itemDetails: undefined,
    volumes: undefined,
    latestPrices: undefined,
    yesterdayData: undefined,
  });

  const fetchData = useCallback(async () => {
    const _yesterdayTimestamp = Math.floor(Date.now() / 1000) - 24 * 60 * 60; // timestamp 24 hours ago
    const yesterdayTimestamp = Math.floor(_yesterdayTimestamp / 3600) * 3600; // timestamp must be divisible by 3600 to align to the start of an hour
    const [itemDetails, volumes, latestPrices, yesterdayData] =
      await Promise.all([
        getItemDetails(),
        getVolumes(),
        getLatestPrices(),
        get1HrAveragePrices(yesterdayTimestamp),
      ]);
    setRawData(() => ({
      itemDetails,
      volumes,
      latestPrices,
      yesterdayData,
    }));
  }, []);

  useEffect(() => {
    fetchData().catch((error) => {
      console.error(error);
    });
  }, []);

  const items: Item[] = useMemo(() => {
    if (!rawData.itemDetails) {
      return [];
    }
    return rawData.itemDetails.map((item) => {
      const prices = rawData.latestPrices?.data[item.id];
      const volume = rawData.volumes?.data[item.id];
      const yesterdayData = rawData.yesterdayData?.data[item.id];
      return { ...item, ...prices, volume, yesterdayData };
    });
  }, [rawData]);

  const itemsMap = useMemo(
    () =>
      items.reduce((acc: ItemsMap, item) => {
        acc[item.id] = item;
        return acc;
      }, {}),
    [items],
  );

  return (
    <ItemsContext.Provider
      value={{
        raw: rawData,
        api: {
          refreshData: fetchData,
        },
        items,
        itemsMap,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
