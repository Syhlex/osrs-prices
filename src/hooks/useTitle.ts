import { useEffect } from 'react';

export const useTitle = (name: string) => {
  useEffect(() => {
    const separator = name.length ? ' · ' : '';
    document.title = `${name}${separator}Prices from the OSRS Wiki`;
  }, [name]);
};
