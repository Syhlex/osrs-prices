import React from 'react';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import cns from 'classnames';

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS

export interface TableProps extends AgGridReactProps {
  styleProps?: { container?: string };
}

export const Table = ({ styleProps, ...agGridReactProps }: TableProps) => {
  return (
    <div className={cns(styleProps?.container, 'ag-theme-alpine')}>
      <AgGridReact {...agGridReactProps}></AgGridReact>
    </div>
  );
};
