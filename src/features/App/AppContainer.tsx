import React from 'react';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { Home } from 'features/Home';
import { AllItems } from 'features/AllItems';
import { App } from './App';
import { FeatureWrapper } from './FeatureWrapper';

interface FeatureConfig {
  path: string;
  name: string;
  element: JSX.Element;
}

const features: FeatureConfig[] = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
  },
  {
    path: '/all-items',
    name: 'All Items',
    element: <AllItems />,
  },
  {
    path: '/favourites',
    name: 'Favourites',
    element: <div>Under construction</div>,
  },
];

const routesConfig: RouteObject[] = features.map(({ path, name, element }) => {
  return {
    path,
    element: <FeatureWrapper name={name} element={element} />,
  };
});

const router = createBrowserRouter([
  {
    element: <App />,
    children: routesConfig,
  },
]);

export const AppContainer = () => {
  return <RouterProvider router={router} />;
};
