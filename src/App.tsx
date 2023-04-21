import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemsProvider } from 'context/Items/ItemsProvider';
import { Home } from 'features/Home';
import { AllItems } from 'features/AllItems';
import styles from './App.mod.scss';
import { NavBar } from 'features/navigation/NavBar';

export const App = () => {
  return (
    <BrowserRouter>
      <ItemsProvider>
        <div className={styles.app}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-items" element={<AllItems />} />
            <Route path="/favourites" element={<div>Under construction</div>} />
          </Routes>
        </div>
      </ItemsProvider>
    </BrowserRouter>
  );
};
