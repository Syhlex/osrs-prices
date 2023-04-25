import React, { useCallback } from 'react';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import cns from 'classnames';

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import { GridOptions, GridReadyEvent } from 'ag-grid-community';

export interface TableProps extends AgGridReactProps {
  styleProps?: { container?: string };
}

const defaultGridOptions: GridOptions = {
  domLayout: 'autoHeight',
};

export const Table = ({ styleProps, ...agGridReactProps }: TableProps) => {
  const onGridReady = useCallback((e: GridReadyEvent) => {
    e.api.sizeColumnsToFit();

    if (agGridReactProps.onGridReady) {
      agGridReactProps.onGridReady(e);
    }
  }, []);

  return (
    <div className={cns(styleProps?.container, 'ag-theme-alpine')}>
      <AgGridReact
        {...defaultGridOptions}
        {...agGridReactProps}
        onGridReady={onGridReady}
      ></AgGridReact>
    </div>
  );
};
