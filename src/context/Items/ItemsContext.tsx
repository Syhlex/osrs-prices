import { createContext } from 'react';
import {
  AveragePriceAndVolume,
  Get1HrAveragePricesResponse,
  GetItemDetailsResponse,
  GetLatestPricesResponse,
  GetVolumesResponse,
  ItemDetails,
  PriceInfo,
} from 'api/types';

export interface ApiValues {
  itemDetails?: GetItemDetailsResponse;
  volumes?: GetVolumesResponse;
  latestPrices?: GetLatestPricesResponse;
  yesterdayData?: Get1HrAveragePricesResponse;
}

export interface ItemsApi {
  refreshData: () => Promise<void>;
}

export type Item = ItemDetails &
  Partial<PriceInfo> & {
    volume?: number;
    yesterdayData?: AveragePriceAndVolume;
  };

export type ItemsMap = { [id: string]: Item };

export interface ItemsContextValues {
  raw: ApiValues;
  api: ItemsApi | undefined;
  items: Item[];
  itemsMap: ItemsMap;
}

export const ItemsContext = createContext<ItemsContextValues>({
  raw: {
    itemDetails: undefined,
    volumes: undefined,
    latestPrices: undefined,
    yesterdayData: undefined,
  },
  api: undefined,
  items: [],
  itemsMap: {},
});
