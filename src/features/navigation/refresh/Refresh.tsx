import { Button } from 'components/Button/Button';
import { ItemsContext } from 'context/Items/ItemsContext';
import React, { useContext, useEffect, useRef, useState } from 'react';

const AUTO_REFRESH_INTERVAL = 60;

export const Refresh = () => {
  const itemsApi = useContext(ItemsContext).api;
  const intervalId = useRef<number>();
  const [timeRemaining, setTimeRemaining] = useState(AUTO_REFRESH_INTERVAL);
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(true);

  const refreshData = () => {
    if (itemsApi) {
      itemsApi.refreshData();
      setTimeRemaining(60);
    }
  };

  const toggleAutoRefresh = () => {
    setAutoRefreshEnabled((prev) => !prev);
  };

  useEffect(() => {
    if (autoRefreshEnabled) {
      intervalId.current = window.setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId.current);
        intervalId.current = undefined;
        setTimeRemaining(AUTO_REFRESH_INTERVAL);
      };
    }
  }, [autoRefreshEnabled]);

  useEffect(() => {
    if (timeRemaining === 0) {
      refreshData();
    }
  }, [timeRemaining]);

  return (
    <div>
      <input
        type="checkbox"
        checked={autoRefreshEnabled}
        onChange={toggleAutoRefresh}
      />
      Auto-refresh
      {autoRefreshEnabled && ` (${timeRemaining})`}
      <Button variant="nav" onClick={refreshData}>
        Refresh
      </Button>
    </div>
  );
};
