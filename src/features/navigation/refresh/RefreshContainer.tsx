import React, { useEffect, useRef, useState } from 'react';
import { useItems } from 'hooks/useItems';
import { useRefresh } from 'hooks/useRefresh';
import { Refresh } from './Refresh';

const AUTO_REFRESH_INTERVAL = 60;

export const RefreshContainer = () => {
  const { api: itemsApi } = useItems();
  const { refreshAction } = useRefresh();
  const intervalId = useRef<number>();
  const [timeRemaining, setTimeRemaining] = useState(AUTO_REFRESH_INTERVAL);
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(true);

  const refreshData = () => {
    if (itemsApi) {
      itemsApi.refreshData();
      refreshAction();
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
    <Refresh
      timeRemaining={timeRemaining}
      autoRefreshEnabled={autoRefreshEnabled}
      toggleAutoRefresh={toggleAutoRefresh}
      onRefresh={refreshData}
    />
  );
};
