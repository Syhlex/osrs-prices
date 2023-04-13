import React from 'react';
import { Home } from 'pages/Home';
import { ItemsProvider } from 'context/Items/ItemsProvider';
import styles from './App.mod.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllItems } from 'pages/AllItems';

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
