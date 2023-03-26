import React from 'react';
import { Home } from 'pages/Home';
import { ItemsProvider } from 'context/Items/ItemsProvider';

export const App = () => {
  return (
    <ItemsProvider>
      <header></header>
      <Home />
    </ItemsProvider>
  );
};
