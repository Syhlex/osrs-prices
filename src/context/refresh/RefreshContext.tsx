import { createContext } from 'react';

export type Action = () => () => void;

export interface RefreshContextValues {
  refreshAction: () => void;
  setRefreshAction: (action: Action) => void;
}

export const RefreshContext = createContext<RefreshContextValues>({
  refreshAction: () => {},
  setRefreshAction: () => {},
});
