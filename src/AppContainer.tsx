import React from 'react';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { Home } from 'features/Home';
import { AllItems } from 'features/AllItems';
import { ItemPageContainer } from 'features/ItemPage/ItemPageContainer';
import { FavouritesPageContainer } from 'features/Favourites/FavouritesPageContainer';
import { App } from './App';

const routesConfig: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/all-items', element: <AllItems /> },
  { path: '/item/:id', element: <ItemPageContainer /> },
  { path: '/favourites', element: <FavouritesPageContainer /> },
];

const router = createBrowserRouter([
  {
    element: <App />,
    children: routesConfig,
  },
]);

export const AppContainer = () => {
  return <RouterProvider router={router} />;
};
