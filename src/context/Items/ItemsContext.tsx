import { createContext } from 'react';
import {
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
}

export interface ItemsApi {
  refreshData: () => Promise<void>;
}

export type ItemRow = ItemDetails & Partial<PriceInfo> & { volume?: number };

export interface ItemsContextValues {
  raw: ApiValues;
  api: ItemsApi | undefined;
  itemRows: ItemRow[];
}

export const ItemsContext = createContext<ItemsContextValues>({
  raw: {
    itemDetails: undefined,
    volumes: undefined,
    latestPrices: undefined,
  },
  api: undefined,
  itemRows: [],
});
