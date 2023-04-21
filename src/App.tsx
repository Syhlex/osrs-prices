import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemsProvider } from 'context/Items/ItemsProvider';
import { Home } from 'features/Home';
import { AllItems } from 'features/AllItems';
import styles from './App.mod.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <ItemsProvider>
        <div className={styles.app}>
          <header></header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-items" element={<AllItems />} />
          </Routes>
        </div>
      </ItemsProvider>
    </BrowserRouter>
  );
};
