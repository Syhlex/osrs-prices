import {
  Get1HrAveragePricesResponse,
  GetItemDetailsResponse,
  GetLatestPricesResponse,
  GetTimeSeriesResponse,
  GetVolumesResponse,
  Timestep,
} from './types';

const BASE_URL = 'https://prices.runescape.wiki/api/v1/osrs';

export const getLatestPrices = (): Promise<GetLatestPricesResponse> => {
  return fetch(`${BASE_URL}/latest`).then((response) => response.json());
};

export const getLatestPrice = (
  id: string,
): Promise<GetLatestPricesResponse> => {
  return fetch(`${BASE_URL}/latest?id=${id}`).then((response) =>
    response.json(),
  );
};

export const getItemDetails = (): Promise<GetItemDetailsResponse> => {
  return fetch(`${BASE_URL}/mapping`).then((response) => response.json());
};

export const getTimeSeries = (
  id: number,
  timestep: Timestep,
): Promise<GetTimeSeriesResponse> => {
  return fetch(`${BASE_URL}/timeseries?id=${id}&timestep=${timestep}`).then(
    (response) => response.json(),
  );
};

export const getVolumes = (): Promise<GetVolumesResponse> => {
  return fetch(`${BASE_URL}/volumes`).then((response) => response.json());
};

export const get1HrAveragePrices = (
  timestamp?: number,
): Promise<Get1HrAveragePricesResponse> => {
  return fetch(
    `${BASE_URL}/1h${timestamp ? `?timestamp=${timestamp}` : ''}`,
  ).then((response) => response.json());
};
