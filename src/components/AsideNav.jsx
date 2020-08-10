import React from 'react';
import {Link} from "react-router-dom";

const AsideNav = ({categories}) => {
    return (
        <div className="menu">
            <div className="menu__wrap">
                <ul className="menu__list m-0">
                    <li className="menu__item">
                        <Link to="#" className="menu__link menu__link_home">Home</Link>
                    </li>
                    {categories.map(item => (
                        <li className="menu__item" key={item.id}>
                            <Link to="#" className="menu__link">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li className="menu__item">
                        <Link to="#" className="menu__link menu__link_home">About</Link>
                    </li>
                </ul>
                <div href="#" className="menu__icon">
                    <span className="menu__icon_arrow">Меню</span>
                </div>
            </div>
        </div>
    )
};

export default AsideNav;