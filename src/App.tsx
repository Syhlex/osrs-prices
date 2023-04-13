import React from 'react';
import { Home } from 'pages/Home';
import { ItemsProvider } from 'context/Items/ItemsProvider';
import styles from './App.mod.scss';

export const App = () => {
  return (
    <ItemsProvider>
      <div className={styles.app}>
        <header></header>
        <Home />
      </div>
    </ItemsProvider>
  );
};
