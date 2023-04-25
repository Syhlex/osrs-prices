import { ItemsContext } from 'context/Items/ItemsContext';
import React, { useContext, useEffect, useState } from 'react';

const AUTO_REFRESH_INTERVAL = 60;

export const Refresh = () => {
  const itemsApi = useContext(ItemsContext).api;
  const [timeRemaining, setTimeRemaining] = useState(AUTO_REFRESH_INTERVAL);

  const refreshData = () => {
    if (itemsApi) {
      itemsApi.refreshData();
      setTimeRemaining(60);
    }
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      refreshData();
    }
  }, [timeRemaining]);

  return (
    <div>
      <input type="checkbox" />
      Auto-refresh
      {timeRemaining}
      <button onClick={refreshData}>Refresh</button>
    </div>
  );
};
