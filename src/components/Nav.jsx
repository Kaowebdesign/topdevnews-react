import React from 'react';
import {Link} from "react-router-dom";
import menu from '../assets/img/menu.svg';
import search from '../assets/img/search.svg';
import bookmark from '../assets/img/bookmark.svg';
import bell from '../assets/img/bell.svg'

const Nav = function ({categories,onOpenAside}) {
    
    const listItems = categories.map(item => 
      <li key={item.id} className="nav__item">
        <Link to={`/posts/${item.name}`} className="nav__link" >{item.name}</Link>
      </li>
    );
    
    return (
      <nav className="nav d-flex justify-content-center">
        <div className="nav__buttons nav__buttons_left">
          <button className="base-icon base-icon_menu" onClick={() => onOpenAside()}>
            <img src={menu} alt="menu" className="base-icon__img"/>
          </button>
        </div>
        <ul className="nav__list mb-0">
          <li className="nav__item"><Link to="/" className="nav__link nav__link_home">Home</Link></li>
          {listItems}
          <li className="nav__item"><Link to="/about" className="nav__link nav__link_home">About</Link></li>
        </ul>
        <div className="nav__buttons nav__buttons_right">
          <button className="base-icon mr-4">
            <img src={search} alt="menu" className="base-icon__img"/>
          </button>
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