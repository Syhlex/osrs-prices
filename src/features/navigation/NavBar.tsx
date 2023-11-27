import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from 'assets/images/Grand_Exchange_logo.webp';
import { Button, Icon, IconName } from 'components';
import { ItemSearch } from './itemSearch/ItemSearch';
import { MoreOptionsDropdown } from './MoreOptionsDropdown';
import { RefreshContainer } from './refresh/RefreshContainer';
import styles from './NavBar.mod.scss';

export interface NavBarProps {}

export const NavBar = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width:  1041px)').matches,
  );
  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1041px)');

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarLogo}>
        <img src={logoImage} className={styles.navbarLogoImage} />
        <span>
          Prices{' '}
          <span className={styles.navbarLogoSub}>from the OSRS Wiki</span>
        </span>
      </Link>
      {isMobile ? (
        <>
          <Button
            variant="nav"
            onClick={() => {
              setCollapse((prev) => !prev);
            }}
          >
            <Icon name={IconName.Bars} />
          </Button>
          {!collapse && (
            <div className={styles.dropdown}>
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
              <MoreOptionsDropdown />
              <RefreshContainer />
            </div>
          )}
        </>
      ) : (
        <>
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
          <MoreOptionsDropdown />
          <RefreshContainer />
        </>
      )}
    </nav>
  );
};
