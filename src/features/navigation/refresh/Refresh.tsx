import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'components/Button/Button';
import { useItems } from 'hooks/useItems';
import styles from './Refresh.mod.scss';

const AUTO_REFRESH_INTERVAL = 60;

export const Refresh = () => {
  const { api: itemsApi } = useItems();
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
      <span className={styles.autoRefreshWrapper}>
        <input
          className={styles.autoRefreshCheckbox}
          type="checkbox"
          checked={autoRefreshEnabled}
          onChange={toggleAutoRefresh}
        />
        Auto-refresh
        {autoRefreshEnabled && ` (${timeRemaining})`}
      </span>
      <Button variant="nav" onClick={refreshData}>
        Refresh
      </Button>
    </div>
  );
};
