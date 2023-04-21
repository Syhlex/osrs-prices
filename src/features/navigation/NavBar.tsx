import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/Grand_Exchange_logo.webp';

export interface NavBarProps {}

export const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <span>
          <img src={logoImage} width={30} height={30} />
        </span>
      </Link>
      <div className="autocomplete" />
      <div className="all-items-button" />
      <div className="favourites-button" />
      <div className="more-options-dropdown" />
      <div className="refresh" />
    </nav>
  );
};
