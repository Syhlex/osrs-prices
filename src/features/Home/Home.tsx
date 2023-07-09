import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, IconName } from 'components';
import { useTitle } from 'hooks/useTitle';
import { HighestDailyVolumeTable } from './Tables/HighestDailyVolumeTable';
import { MostExpensiveTable } from './Tables/MostExpensiveTable';
import styles from './Home.mod.scss';

export const Home = () => {
  useTitle('Home');

  return (
    <main className={styles.home}>
      <h3 className={styles.header}>
        Welcome to our real-time Grand Exchange pricing site.
      </h3>
      <p>
        Here, we leverage the power of our{' '}
        <a
          href="https://oldschool.runescape.wiki/w/RuneScape:Real-time_Prices"
          rel="noopener noreferrer"
        >
          real-time price API
        </a>{' '}
        to provide you with easy to view pricing information about items in{' '}
        <span className={styles.italicText}>Old School Runescape</span>.
      </p>
      <Card title="Quick tips" classes={{ card: styles.quickTipsCard }}>
        <ul className={styles.quickTipsList}>
          <li>
            You can{' '}
            <span className={styles.favouriteText}>
              <Icon name={IconName.Heart} /> favourite
            </span>{' '}
            specific items, so that they appear on your{' '}
            <Link to="/favourites">Favourites</Link> page. This allows you to
            have an easy to track list of the items you care about the most.
          </li>
          <li>
            Tables can be <span className={styles.highlightedText}>sorted</span>{' '}
            by clicking the column headers, or{' '}
            <span className={styles.highlightedText}>filtered</span> by clicking
            'Apply Filters'. Try it out on our{' '}
            <Link to="/all-items">All Items</Link> page.
          </li>
          <li>
            To ensure you have the most{' '}
            <span className={styles.highlightedText}>fresh data</span>, turn on
            'Auto-refresh' on the right side of the header {`(`}or under the
            hamburger menu on smaller screens{`)`}.
          </li>
        </ul>
      </Card>
      <Card
        title="Items with highest daily volume"
        classes={{ card: styles.highestVolumeCard }}
      >
        <HighestDailyVolumeTable />
      </Card>
      <Card title="Most expensive items">
        <MostExpensiveTable />
      </Card>
    </main>
  );
};
