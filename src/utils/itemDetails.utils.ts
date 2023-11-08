import { Item } from 'context/Items/ItemsContext';
import { addCommas } from 'utils/number.utils';
import { minutesAgo } from 'utils/time.utils';

const getPriceText = (price?: number) => {
  return price ? `${addCommas(price)} coin${price > 1 ? 's' : ''}` : 'Unknown';
};

const getLastTradeText = (timestamp?: number) => {
  if (!timestamp) {
    return 'Unknown';
  }

  const minutesInOneHour = 60;
  const minutesInOneDay = minutesInOneHour * 24;
  const minutesInOneMonth = minutesInOneDay * 30;
  const minutesInOneYear = minutesInOneMonth * 12;

  const minutesAgoValue = minutesAgo(timestamp) || 1; // Lowest value is 1
  if (minutesAgoValue < minutesInOneHour) {
    return `${minutesAgoValue} minute${minutesAgoValue > 1 ? 's' : ''} ago`;
  } else if (minutesAgoValue < minutesInOneDay) {
    const hoursAgo = Math.floor(minutesAgoValue / minutesInOneHour);
    return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
  } else if (minutesAgoValue < minutesInOneMonth) {
    const daysAgo = Math.floor(minutesAgoValue / minutesInOneDay);
    return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
  } else if (minutesAgoValue < minutesInOneYear) {
    const monthsAgo = Math.floor(minutesAgoValue / minutesInOneMonth);
    return `${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
  } else {
    const yearsAgo = Math.floor(minutesAgoValue / minutesInOneYear);
    return `${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
  }
};

export const getItemDetails = (item: Item) => {
  const buyPrice = item.high ? addCommas(item.high) : 'Unknown';
  const buyPriceText = getPriceText(item.high);
  const sellPrice = item.low ? addCommas(item.low) : 'Unknown';
  const sellPriceText = getPriceText(item.low);
  const lastBuyTrade = getLastTradeText(item.highTime);
  const lastSellTrade = getLastTradeText(item.lowTime);

  const volume = item.volume;
  const volumeText = volume !== undefined ? addCommas(volume) : 'Unknown';
  const margin = item.high && item.low ? item.high - item.low : undefined;
  const marginText = margin !== undefined ? addCommas(margin) : 'Unknown';
  const potentialProfit =
    typeof margin === 'number' && typeof item.limit === 'number'
      ? addCommas(margin * item.limit)
      : 'Unknown';
  const marginTimesVolume =
    typeof margin === 'number' && typeof volume === 'number'
      ? addCommas(margin * volume)
      : 'Unknown';
  const ROI =
    typeof margin === 'number' && typeof item.low === 'number'
      ? `${((margin / item.low) * 100).toFixed(2)}%`
      : 'Unknown';

  const buyLimit = item.limit ? addCommas(item.limit) : 'Unknown';
  const highAlchProfit =
    typeof item.highalch === 'number' && item.low
      ? ` (${addCommas(item.highalch - item.low)})`
      : 'Unknown';
  const highAlch =
    typeof item.highalch === 'number'
      ? `${addCommas(item.highalch)}${highAlchProfit}`
      : 'Unknown';
  const lowAlch =
    typeof item.lowalch === 'number' ? addCommas(item.lowalch) : 'Unknown';

  return {
    buyPrice,
    buyPriceText,
    sellPrice,
    sellPriceText,
    lastBuyTrade,
    lastSellTrade,
    volumeText,
    marginText,
    potentialProfit,
    marginTimesVolume,
    ROI,
    buyLimit,
    highAlchProfit,
    highAlch,
    lowAlch,
  };
};
