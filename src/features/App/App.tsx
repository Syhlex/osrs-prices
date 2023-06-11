import React from 'react';
import { Outlet } from 'react-router-dom';
import { ItemsProvider } from 'context/Items/ItemsProvider';
import styles from './App.mod.scss';
import { NavBar } from 'features/navigation/NavBar';

export const App = () => {
  return (
    <ItemsProvider>
      <div className={styles.app}>
        <NavBar />
        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </ItemsProvider>
  );
};
