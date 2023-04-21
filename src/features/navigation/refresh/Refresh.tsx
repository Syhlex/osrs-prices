import { ItemsContext } from 'context/Items/ItemsContext';
import React, { useContext } from 'react';

export const Refresh = () => {
  const itemsApi = useContext(ItemsContext).api;
  const timeRemaining = 0;

  const onRefresh = () => {
    if (itemsApi) {
      itemsApi.refreshData();
    }
  };

  return (
    <div>
      <input type="checkbox" />
      Auto-refresh
      {timeRemaining}
      <button onClick={onRefresh}>Refresh</button>
    </div>
  );
};
