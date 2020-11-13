import React from 'react';

import "../css/SearchComponent.css"

const SearchComponent = ({ change }) => {

    return (
        <div className="search">
            <label htmlFor="search"><strong>Wyszukaj film</strong></label>
            <input className="search__input" onChange={change} type="text" placeholder="Wpisz tytuł filmu" id="search" ></input>
        </div>
    )
}

export default SearchComponent;