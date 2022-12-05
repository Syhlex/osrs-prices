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

export interface ComputedValues {
  rowData: (Partial<ItemDetails> & Partial<PriceInfo> & { volume?: number })[];
}

export type ItemsContextValues = ApiValues & ComputedValues;

export const ItemsContext = createContext<ItemsContextValues>({
  itemDetails: undefined,
  volumes: undefined,
  latestPrices: undefined,
  rowData: [],
});
