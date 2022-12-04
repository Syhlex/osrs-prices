export type Timestep = '5m' | '1h' | '6h';

export interface LatestPrices {
  [id: number]: {
    high: number;
    highTime: number;
    low: number;
    lowTime: number;
  };
}

export interface GetLatestPricesResponse {
  data: LatestPrices;
}

export type GetItemDetailsResponse = {
  examine: string;
  id: number;
  members: boolean;
  lowalch: number;
  limit: number;
  value: number;
  highalch: number;
  icon: string;
  name: string;
}[];

export interface GetVolumesResponse {
  timestamp: number;
  data: {
    [id: number]: number;
  };
}
