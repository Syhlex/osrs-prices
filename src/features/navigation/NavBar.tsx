import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/Grand_Exchange_logo.webp';
import styles from './NavBar.mod.scss';

export interface NavBarProps {}

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logoImage} width={30} height={30} />
        Prices<span> from the OSRS Wiki</span>
      </Link>
      <div className="autocomplete" />
      <Link to="/all-items">
        <button>All Items</button>
      </Link>
      <Link to="/favourites">
        <button>Favourites</button>
      </Link>
      <div className="more-options-dropdown" />
      <div className="refresh" />
    </nav>
  );
};
