import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/Grand_Exchange_logo.webp';
import styles from './NavBar.mod.scss';
import { Refresh } from './refresh/Refresh';
import { ItemSearch } from './itemSearch/ItemSearch';
import { Button } from 'components/Button/Button';

export interface NavBarProps {}

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarLogo}>
        <img src={logoImage} className={styles.navbarLogoImage} />
        <span>
          Prices{' '}
          <span className={styles.navbarLogoSub}>from the OSRS Wiki</span>
        </span>
      </Link>
      <ItemSearch />
      <Link to="/all-items">
        <Button variant="nav">All Items</Button>
      </Link>
      <Link to="/favourites">
        <Button variant="nav">Favourites</Button>
      </Link>
      <div className="more-options-dropdown" />
      <Refresh />
    </nav>
  );
};
