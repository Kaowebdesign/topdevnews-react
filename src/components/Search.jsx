import React from 'react';

const Search = ({showSearch}) => {
    const classes = ['search-bar'];

    if(showSearch){
        classes.push('active');
    }
    return(
        <div className={classes.join(' ')}>
            <input type="text" className="search-bar__input" placeholder="Поле для поиска"/>
            <button className="search-bar__button ml-2">Искать</button>
        </div>
    )
};

export default Search;