import { CellClassParams, ValueFormatterParams } from 'ag-grid-community';
import styles from './HomeTables.mod.scss';

export const addCommas = ({ value }: ValueFormatterParams) => {
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

export const getMarginColors = ({ value }: CellClassParams) => {
  return value >= 0 ? styles['margin-positive'] : styles['margin-negative'];
};
