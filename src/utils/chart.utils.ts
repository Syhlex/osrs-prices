// For a given range, returns an array of equally spaced tick values including 0.
export const getTickValues = (
  minValue: number,
  maxValue: number,
  numTicks: number,
) => {
  const range = maxValue - minValue;

  let tickFactor;
  if (range <= 10) {
    tickFactor = 1;
  } else if (range <= 100) {
    tickFactor = 5;
  } else if (range <= 10000) {
    tickFactor = 100;
  } else if (range <= 1000000) {
    tickFactor = 50000;
  } else {
    tickFactor = 250000;
  }

  const interval = Math.round(range / (numTicks - 1) / tickFactor) * tickFactor;

  const tickValues = [0];

  if (interval === 0) {
    return tickValues;
  }

  let counter = 0;
  while (counter < maxValue) {
    counter += interval;
    tickValues.push(counter);
  }

  counter = 0;
  while (counter > minValue) {
    counter -= interval;
    tickValues.push(counter);
  }

  tickValues.sort((a, b) => a - b);
  return tickValues;
};
