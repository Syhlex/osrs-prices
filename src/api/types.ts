export type Timestep = '5m' | '1h' | '6h';

export interface PriceInfo {
  high: number;
  highTime: number;
  low: number;
  lowTime: number;
}

export interface LatestPrices {
  [id: number]: PriceInfo;
}

export interface GetLatestPricesResponse {
  data: LatestPrices;
}

export interface ItemDetails {
  examine: string;
  id: number;
  members: boolean;
  lowalch: number;
  limit?: number;
  value: number;
  highalch: number;
  icon: string;
  name: string;
}

export type GetItemDetailsResponse = ItemDetails[];

export interface GetVolumesResponse {
  timestamp: number;
  data: {
    [id: number]: number;
  };
}

export interface TimeSeriesPoint {
  timestamp: number;
  avgHighPrice: number | null;
  avgLowPrice: number | null;
  highPriceVolume: number;
  lowPriceVolume: number;
}

export interface GetTimeSeriesResponse {
  data: TimeSeriesPoint[];
  itemId: number;
}
