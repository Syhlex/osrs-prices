import React from 'react';
import { Item } from 'context/Items/ItemsContext';
import { getItemDetailsText } from 'utils/itemDetails.utils';
import { ItemDetails } from './ItemDetails';

export interface ItemDetailsContainerProps {
  item: Item;
}

export const ItemDetailsContainer = ({ item }: ItemDetailsContainerProps) => {
  const {
    buyPriceText,
    sellPriceText,
    lastBuyTrade,
    lastSellTrade,
    volumeText,
    marginText,
    potentialProfit,
    marginTimesVolume,
    ROI,
    buyLimit,
    highAlch,
    lowAlch,
  } = getItemDetailsText(item);

  return (
    <ItemDetails
      buyPrice={buyPriceText}
      sellPrice={sellPriceText}
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
