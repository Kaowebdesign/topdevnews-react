import React from 'react';

const Subscribe = () => {

    return(
        <div className="subscribe">
            <input type="text" className="subscribe__input search-bar__input" placeholder="Подписаться на новости"/>
            <button className="subscribe__button search-bar__button ml-2">Подписаться</button>
        </div>
    );
};

export default Subscribe;