import React from 'react';
import { Item } from 'context/Items/ItemsContext';
import { addCommas } from 'utils/number.utils';
import { getLastTradeText, getPriceText } from './ItemDetails.helpers';
import { ItemDetails } from './ItemDetails';

export interface ItemDetailsContainerProps {
  item: Item;
}

export const ItemDetailsContainer = ({ item }: ItemDetailsContainerProps) => {
  const buyPrice = getPriceText(item.high);
  const sellPrice = getPriceText(item.low);
  const lastBuyTrade = getLastTradeText(item.highTime);
  const lastSellTrade = getLastTradeText(item.lowTime);

  const volume = item.volume;
  const volumeText = volume !== undefined ? addCommas(volume) : 'Not available';
  const margin = item.high && item.low ? item.high - item.low : undefined;
  const marginText = margin !== undefined ? addCommas(margin) : 'Not available';
  const potentialProfit =
    typeof margin === 'number' && typeof item.limit === 'number'
      ? addCommas(margin * item.limit)
      : 'Not available';
  const marginTimesVolume =
    typeof margin === 'number' && typeof volume === 'number'
      ? addCommas(margin * volume)
      : 'Not available';
  const ROI =
    typeof margin === 'number' && typeof item.low === 'number'
      ? `${((margin / item.low) * 100).toFixed(2)}%`
      : 'Not available';

  const buyLimit = item.limit ? addCommas(item.limit) : 'Unknown';
  const highAlchProfit = item.low
    ? ` (${addCommas(item.highalch - item.low)})`
    : '';
  const highAlch = `${addCommas(item.highalch)}${highAlchProfit}`;
  const lowAlch = addCommas(item.lowalch);

  return (
    <ItemDetails
      buyPrice={buyPrice}
      sellPrice={sellPrice}
      lastBuyTrade={lastBuyTrade}
      lastSellTrade={lastSellTrade}
      volume={volumeText}
      margin={marginText}
      potentialProfit={potentialProfit}
      marginTimesVolume={marginTimesVolume}
      roi={ROI}
      buyLimit={buyLimit}
      highAlch={highAlch}
      lowAlch={lowAlch}
      isMembers={item.members}
      examine={item.examine}
    />
  );
};
