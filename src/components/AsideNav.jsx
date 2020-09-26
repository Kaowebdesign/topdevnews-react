import React from 'react';
import {Link} from "react-router-dom";
import close from '../assets/img/close.svg'

const AsideNav = ({categories,showAside,onCloseAside}) => {
    let classes = ['menu'];
    
    if(showAside){
        classes.push('active');
    }

    return (
        <div className={classes.join(' ')}>
            <div className="menu__wrap">
                <button className="base-icon base-icon_close" onClick={() => onCloseAside()}>
                    <img src={close} alt="close" className="base-icon__img"/>
                </button>
                <ul className="menu__list m-0">
                    <li className="menu__item">
                        <Link to="/" className="menu__link menu__link_home">Home</Link>
                    </li>
                    {categories.map(item => (
                        <li className="menu__item" key={item.id}>
                            <Link to={`/posts/${item.name}`} className="menu__link">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li className="menu__item">
                        <Link to="/about" className="menu__link menu__link_home">About</Link>
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