import React from 'react';
import {Link} from "react-router-dom";

const Nav = function ({categories}) {
    
    const listItems = categories.map(item => 
      <li key={item.id} className="nav__item">
        <Link to="/" className="nav__link" >{item.name}</Link>
      </li>
    );
    
    return (
      <nav className="nav d-flex justify-content-center">
        <ul className="nav__list mb-0">
          <li className="nav__item"><Link to="/" className="nav__link nav__link_home">Home</Link></li>
          {listItems}
          <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
        </ul>
      </nav>
    );
};

export default Nav;