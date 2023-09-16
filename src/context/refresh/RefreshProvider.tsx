import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import { Action, RefreshContext } from './RefreshContext';

export interface ItemsProviderProps {
  children?: ReactNode;
}

export const RefreshProvider = ({ children }: ItemsProviderProps) => {
  const [refreshAction, _setRefreshAction] = useState<Action>(() => () => {});
  const location = useLocation();
  const isItemPage = useMatch('/item/:id');

  useEffect(() => {
    // Clear the refresh action if user navigates away from the item page
    if (!isItemPage) {
      _setRefreshAction(() => () => {});
    }
  }, [location.pathname]);

  const setRefreshAction = (action: Action) => {
    _setRefreshAction(action);
  };

  return (
    <RefreshContext.Provider value={{ refreshAction, setRefreshAction }}>
      {children}
    </RefreshContext.Provider>
  );
};
