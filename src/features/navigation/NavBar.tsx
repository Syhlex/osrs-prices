import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from 'assets/images/Grand_Exchange_logo.webp';
import { Button, Icon, IconName } from 'components';
import { ItemSearch } from './itemSearch/ItemSearch';
import { RefreshContainer } from './refresh/RefreshContainer';
import styles from './NavBar.mod.scss';

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
        <Button variant="nav" classes={{ button: styles.iconButton }}>
          <Icon name={IconName.List} />
          All Items
        </Button>
      </Link>
      <Link to="/favourites">
        <Button variant="nav" classes={{ button: styles.iconButton }}>
          <Icon name={IconName.Heart} />
          Favourites
        </Button>
      </Link>
      <div className="more-options-dropdown" />
      <RefreshContainer />
    </nav>
  );
};
