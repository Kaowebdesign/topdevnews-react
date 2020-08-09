import React from 'react';
import Nav from './Nav';
import '../assets/css/header.css';

const Header = ({siteTitle,categories}) => (
    <header className="header">
      <div className="header__top">
        <h1 className="header__title mb-0">{siteTitle}</h1>
      </div>
      <Nav categories={categories}/>
    </header>
  );

export default Header;