import React from 'react';
import Nav from './Nav';

interface IHeaderProps {
  siteTitle: string,
  categories: Array<{}>,
  onOpenAside():void
}

const Header: React.FC<IHeaderProps> = ({siteTitle,categories,onOpenAside}) => {

  return(
    <header className="header">
      <div className="header__top">
        <h1 className="header__title mb-0">{siteTitle}</h1>
      </div>
      <Nav categories={categories} onOpenAside={onOpenAside}/>
    </header>
  );
};

export default Header;