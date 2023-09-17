import React from 'react';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { Home } from 'features/Home';
import { AllItems } from 'features/AllItems';
import { App } from './App';
import { ItemPageContainer } from 'features/ItemPage/ItemPageContainer';

const routesConfig: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/all-items', element: <AllItems /> },
  { path: '/item/:id', element: <ItemPageContainer /> },
  { path: '/favourites', element: <div>Under construction</div> },
  { path: '/alchemy', element: <div>Under construction</div> },
  { path: '/changelog', element: <div>Under construction</div> },
  { path: '/faqs', element: <div>Under construction</div> },
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
