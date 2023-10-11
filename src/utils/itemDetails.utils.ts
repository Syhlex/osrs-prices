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
  const minutesAgoVal = minutesAgo(timestamp) || 1; // Lowest value is 1
  return `${minutesAgoVal} minute${minutesAgoVal > 1 ? 's' : ''} ago`;
};

export const getItemDetailsText = (item: Item) => {
  const buyPrice = getPriceText(item.high);
  const sellPrice = getPriceText(item.low);
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
    sellPrice,
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
