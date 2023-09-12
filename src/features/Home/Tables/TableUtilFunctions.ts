import {
  CellClassParams,
  ValueFormatterFunc,
  ValueFormatterParams,
} from 'ag-grid-community';
import { addCommas } from 'utils/number.utils';
import styles from './HomeTables.mod.scss';

export const getChainedValueFormatter = (
  valueFormatters: ValueFormatterFunc[],
): ValueFormatterFunc => {
  return (params: ValueFormatterParams) => {
    const paramsResult = valueFormatters.reduce((acc, formatter) => {
      const value = formatter(acc);
      return { ...acc, value };
    }, params);
    return paramsResult.value;
  };
};

export const addCommasFormatter: ValueFormatterFunc = ({ value }) => {
  if (value === undefined) {
    return '';
  }
  return addCommas(value);
};

export const addUnknown: ValueFormatterFunc = ({ value }) => {
  return value === '' || value === undefined ? 'Unknown' : value;
};

export const getMarginCellClass = ({ value }: CellClassParams) => {
  return value >= 0 ? styles.marginPositive : styles.marginNegative;
};

export const getBuyLimitCellClass = ({ value }: CellClassParams) => {
  return value === undefined ? styles.buyLimitUnknown : null;
};
