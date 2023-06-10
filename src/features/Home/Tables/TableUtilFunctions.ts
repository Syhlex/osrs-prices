import {
  CellClassParams,
  ValueFormatterFunc,
  ValueFormatterParams,
} from 'ag-grid-community';
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

export const addCommas: ValueFormatterFunc = ({ value }) => {
  if (value === undefined) {
    return '';
  }
  let str = value.toString();
  let reversedStr = str.split('').reverse().join('');
  let newStr = '';
  for (let i = 0; i < reversedStr.length; i++) {
    if ((i + 1) % 3 === 0) {
      newStr = ',' + reversedStr.charAt(i) + newStr;
    } else {
      newStr = reversedStr.charAt(i) + newStr;
    }
  }

  if (newStr.charAt(0) === ',') {
    newStr = newStr.slice(1);
  } else if (newStr.charAt(0) === '-' && newStr.charAt(1) === ',') {
    newStr = newStr.charAt(0) + newStr.slice(2);
  }
  return newStr;
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
