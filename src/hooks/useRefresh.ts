import { useContext } from 'react';
import { RefreshContext } from 'context/refresh/RefreshContext';

export const useRefresh = () => useContext(RefreshContext);
