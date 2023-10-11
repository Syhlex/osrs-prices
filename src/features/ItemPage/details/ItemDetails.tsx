import React from 'react';
import classNames from 'classnames';
import buyIcon from 'assets/images/buy-icon.png';
import sellIcon from 'assets/images/sell-icon.png';
import membersImg from 'assets/images/members.png';
import freeToPlayImg from 'assets/images/free-to-play.png';
import styles from './ItemDetails.mod.scss';

export interface ItemDetailsProps {
  buyPrice: string;
  sellPrice: string;
  lastBuyTrade: string;
  lastSellTrade: string;
  volume: string;
  margin: string;
  potentialProfit: string;
  marginTimesVolume: string;
  roi: string;
  buyLimit: string;
  highAlch: string;
  lowAlch: string;
  isMembers: boolean;
  examine: string;
}

export const ItemDetails = ({
  buyPrice,
  sellPrice,
  lastBuyTrade,
  lastSellTrade,
  volume,
  margin,
  potentialProfit,
  marginTimesVolume,
  roi,
  buyLimit,
  highAlch,
  lowAlch,
  isMembers,
  examine,
}: ItemDetailsProps) => {
  return (
    <div className={styles.itemDetails}>
      <div className={styles.section}>
        <div className={styles.title}>
          <img
            src={buyIcon}
            alt="Buy price icon"
            className={styles.buySellIcon}
          />
          Buy price: {buyPrice}
        </div>
        <div className={styles.subtitle}>
          Last trade: <span className={styles.grey}>{lastBuyTrade}</span>
        </div>
        <div className={styles.title}>
          <img
            src={sellIcon}
            alt="Sell price icon"
            className={styles.buySellIcon}
          />
          Sell price: {sellPrice}
        </div>
        <div className={styles.subtitle}>
          Last trade: <span className={styles.grey}>{lastSellTrade}</span>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>Daily volume: {volume}</div>
        <div className={classNames(styles.subtitle, styles.grey)}>
          Based on the official OSRS GEDB
        </div>
        <div className={styles.title}>Margin: {margin}</div>
        <div className={styles.titleSmall}>
          Potential profit: {potentialProfit}
        </div>
        <div className={styles.titleSmall}>
          Margin * volume: {marginTimesVolume}
        </div>
        <div className={styles.title}>ROI: {roi}</div>
      </div>
      <div className={styles.section}>
        <table>
          <tbody className={styles.table}>
            <tr>
              <td>Buy limit</td>
              <td>{buyLimit}</td>
            </tr>
            <tr>
              <td>High alch</td>
              <td>{highAlch}</td>
            </tr>
            <tr>
              <td>Low alch</td>
              <td>{lowAlch}</td>
            </tr>
            <tr>
              <td>Members</td>
              <td>
                <img
                  src={isMembers ? membersImg : freeToPlayImg}
                  alt={isMembers ? 'Members-only' : 'Free-to-play'}
                />
              </td>
            </tr>
            <tr>
              <td>Examine</td>
              <td>{examine}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
