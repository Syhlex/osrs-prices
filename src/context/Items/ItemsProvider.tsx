import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getItemDetails, getLatestPrices, getVolumes } from 'api';
import { ApiValues, Item, ItemsContext, ItemsMap } from './ItemsContext';

export interface ItemsProviderProps {
  children?: ReactNode;
}

export const ItemsProvider = ({ children }: ItemsProviderProps) => {
  const [rawData, setRawData] = useState<ApiValues>({
    itemDetails: undefined,
    volumes: undefined,
    latestPrices: undefined,
  });

  const fetchData = useCallback(async () => {
    const itemDetails = await getItemDetails();
    const volumes = await getVolumes();
    const latestPrices = await getLatestPrices();
    setRawData(() => ({
      itemDetails,
      volumes,
      latestPrices,
    }));
  }, []);

  useEffect(() => {
    fetchData().catch((error) => {
      console.error(error);
    });
  }, []);

  const itemRows: Item[] = useMemo(() => {
    if (!rawData.itemDetails) {
      return [];
    }
    return rawData.itemDetails.map((item) => {
      const prices = rawData.latestPrices?.data[item.id];
      const volume = rawData.volumes?.data[item.id];
      return { ...item, ...prices, volume };
    });
  }, [rawData]);

  const itemsMap = useMemo(
    () =>
      itemRows.reduce((acc: ItemsMap, item) => {
        acc[item.id] = item;
        return acc;
      }, {}),
    [itemRows],
  );

  return (
    <ItemsContext.Provider
      value={{
        raw: {
          itemDetails: rawData.itemDetails,
          volumes: rawData.volumes,
          latestPrices: rawData.latestPrices,
        },
        api: {
          refreshData: fetchData,
        },
        itemRows,
        itemsMap,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
