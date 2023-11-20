import { useEffect, useState } from 'react';
import localforage from 'localforage';

const getStoredFavourites = async () => {
  return (await localforage.getItem<Set<number>>('favourites')) ?? new Set();
};

const setStoredFavourites = async (favourites: Set<number>) => {
  return localforage.setItem('favourites', favourites);
};

export const useFavourites = () => {
  const [favourites, setFavourites] = useState(new Set<number>());

  const toggleFavourite = (itemId: number) => {
    const updatedFavourites = new Set(favourites);
    if (updatedFavourites.has(itemId)) {
      updatedFavourites.delete(itemId);
    } else {
      updatedFavourites.add(itemId);
    }
    setFavourites(updatedFavourites);
    setStoredFavourites(updatedFavourites);
  };

  useEffect(() => {
    getStoredFavourites().then((favourites) => {
      setFavourites(favourites);
    });
  }, []);

  return { favourites, toggleFavourite };
};
