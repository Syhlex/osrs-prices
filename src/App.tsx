import React from 'react';
import { Outlet } from 'react-router-dom';
import { ItemsProvider } from 'context/Items/ItemsProvider';
import styles from './App.mod.scss';
import { NavBar } from 'features/navigation/NavBar';
import { RefreshProvider } from 'context/refresh/RefreshProvider';

export const App = () => {
  return (
    <div className={styles.app}>
      <ItemsProvider>
        <RefreshProvider>
          <NavBar />
          <main className={styles.mainContent}>
            <Outlet />
          </main>
        </RefreshProvider>
      </ItemsProvider>
    </div>
  );
};
