export const sortAlphabetical = (a: string, b: string) => {
  return a.localeCompare(b);
};

export const sortNumerical = (a: number, b: number) => {
  return a - b;
};

export const sortBoolean = (a: boolean, b: boolean) => {
  const numA = a ? 1 : 0;
  const numB = b ? 1 : 0;
  return numA - numB;
};
