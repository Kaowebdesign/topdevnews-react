import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Search from './Search';
//import svg icons for buttons
import menu from '../assets/img/menu.svg';
import search from '../assets/img/search.svg';
import bookmark from '../assets/img/bookmark.svg';
import bell from '../assets/img/bell.svg';
import moon from '../assets/img/moon.svg';
import close from '../assets/img/close_black.svg';

const Nav = function ({categories,onOpenAside}) {

  const [showSearch, setShowSearch] = useState(false);

    const openSearch = () => {
      setShowSearch(true);
    };

    const closeSearch = () => {
      setShowSearch(false);
    };
    
    const listItems = categories.map(item => 
      <li key={item.id} className="nav__item">
        <Link to={`/posts/${item.name}`} className="nav__link" >{item.name}</Link>
      </li>
    );
    
    return (
      <nav className="nav d-flex justify-content-center">
        <Search showSearch={showSearch}/>
        <div className="nav__buttons nav__buttons_left">
          <button className="base-icon base-icon_menu mr-4" onClick={() => onOpenAside()}>
            <img src={menu} alt="menu" className="base-icon__img"/>
          </button>
          <button className="base-icon base-icon_night">
            <img src={moon} alt="night" className="base-icon__img"/>
          </button>
        </div>
        <ul className="nav__list mb-0">
          <li className="nav__item"><Link to="/" className="nav__link nav__link_home">Home</Link></li>
          {listItems}
          <li className="nav__item"><Link to="/about" className="nav__link nav__link_home">About</Link></li>
        </ul>
        <div className="nav__buttons nav__buttons_right">
          { 
              showSearch ?
                <button className="base-icon mr-4" onClick={() => closeSearch()}>
                  <img src={close} alt="menu" className="base-icon__img"/>
                </button>
              :
                <button className="base-icon mr-4" onClick={() => openSearch()}>
                  <img src={search} alt="close" className="base-icon__img"/>
                </button>
          }
          <button className="base-icon mr-4">
            <img src={bookmark} alt="menu" className="base-icon__img"/>
          </button>
          <button className="base-icon">
            <img src={bell} alt="menu" className="base-icon__img"/>
          </button>
        </div>
      </nav>
    );
};

export default Nav;