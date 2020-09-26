import React from 'react';
import Nav from './Nav';

const Header = ({siteTitle,categories,onOpenAside}) => (
    <header className="header">
      <div className="header__top">
        <h1 className="header__title mb-0">{siteTitle}</h1>
      </div>
      <Nav categories={categories} onOpenAside={onOpenAside}/>
    </header>
  );

export default Header;