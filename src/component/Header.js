import React from 'react';

import "../css/Header.css"

import filmy from "../img/filmy.jpeg"


const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={filmy} alt="logo" />
        </header>
    )
}


export default Header