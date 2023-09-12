export const addCommas = (number: number) => {
  let str = number.toString();
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
