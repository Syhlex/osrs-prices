import React from 'react';
import { Button, Icon, IconName } from 'components';
import styles from './Refresh.mod.scss';

export interface RefreshProps {
  timeRemaining: number;
  autoRefreshEnabled: boolean;
  toggleAutoRefresh: () => void;
  onRefresh: () => void;
}

export const Refresh = ({
  timeRemaining,
  autoRefreshEnabled,
  toggleAutoRefresh,
  onRefresh,
}: RefreshProps) => {
  return (
    <div className={styles.refresh}>
      <div className={styles.autoRefreshWrapper}>
        <input
          className={styles.autoRefreshCheckbox}
          type="checkbox"
          checked={autoRefreshEnabled}
          onChange={toggleAutoRefresh}
        />
        Auto-refresh
        {autoRefreshEnabled && ` (${timeRemaining})`}
      </div>
      <Button variant="nav" onClick={onRefresh}>
        <Icon name={IconName.Refresh} />
      </Button>
    </div>
  );
};
