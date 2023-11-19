import localforage from 'localforage';

export const getStoredFavourites = async () => {
  return (await localforage.getItem<Set<number>>('favourites')) ?? new Set();
};

export const setStoredFavourites = async (favourites: Set<number>) => {
  return localforage.setItem('favourites', favourites);
};
