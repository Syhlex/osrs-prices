import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { getItemDetails, getLatestPrices, getVolumes } from 'api';
import { ApiValues, ItemsContext } from './ItemsContext';

export interface ItemsProviderProps {
  children?: ReactNode;
}

export const ItemsProvider = ({ children }: ItemsProviderProps) => {
  const [state, setState] = useState<ApiValues>({
    itemDetails: undefined,
    volumes: undefined,
    latestPrices: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      const itemDetails = await getItemDetails();
      const volumes = await getVolumes();
      const latestPrices = await getLatestPrices();

      setState(() => ({
        itemDetails,
        volumes,
        latestPrices,
      }));
    };

    fetchData().catch((error) => {
      console.error(error);
    });
  }, []);

  const rowData = useMemo(() => {
    if (!state.itemDetails) {
      return [];
    }
    return state.itemDetails.map((item) => {
      const prices = state.latestPrices?.data[item.id];
      const volume = state.volumes?.data[item.id];
      return { ...item, ...prices, volume };
    });
  }, [state]);

  return (
    <ItemsContext.Provider
      value={{
        itemDetails: state.itemDetails,
        volumes: state.volumes,
        latestPrices: state.latestPrices,
        rowData,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
