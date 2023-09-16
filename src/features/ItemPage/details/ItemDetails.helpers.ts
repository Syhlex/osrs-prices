import { addCommas } from 'utils/number.utils';
import { minutesAgo } from 'utils/time.utils';

export const getPriceText = (price?: number) => {
  return price
    ? `${addCommas(price)} coin${price > 1 ? 's' : ''}`
    : 'Not available';
};

export const getLastTradeText = (timestamp?: number) => {
  if (!timestamp) {
    return 'Not available';
  }
  const minutesAgoVal = minutesAgo(timestamp) || 1; // Lowest value is 1
  return `${minutesAgoVal} minute${minutesAgoVal > 1 ? 's' : ''} ago`;
};
