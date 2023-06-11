import { useContext } from 'react';
import { ItemsContext } from 'context/Items/ItemsContext';

export const useItems = () => useContext(ItemsContext);
