import React, { useCallback } from 'react';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import cns from 'classnames';

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import { GridOptions, GridReadyEvent } from 'ag-grid-community';

export interface TableProps extends AgGridReactProps {
  classes?: { container?: string };
}

const defaultGridOptions: GridOptions = {
  // This property causes all rows to be rendered in the DOM, even with pagination. https://www.ag-grid.com/javascript-data-grid/grid-size/#grid-auto-height
  // However, autoheight is a design requirement. Thus, we cannot use ag-grid and will opt for a native table implementation.
  domLayout: 'autoHeight',
};

export const Table = ({ classes, ...agGridReactProps }: TableProps) => {
  const onGridReady = useCallback((e: GridReadyEvent) => {
    e.api.sizeColumnsToFit();

    if (agGridReactProps.onGridReady) {
      agGridReactProps.onGridReady(e);
    }
  }, []);

  return (
    <div className={cns(classes?.container, 'ag-theme-alpine')}>
      <AgGridReact
        {...defaultGridOptions}
        {...agGridReactProps}
        onGridReady={onGridReady}
      ></AgGridReact>
    </div>
  );
};
