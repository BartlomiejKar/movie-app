import React from 'react';

import { Link } from "react-router-dom"


import filmy from "../img/filmy.jpeg"
import "../css/Navigation.css"

const Navigation = () => {
    return (
        <nav className="navigation">
            <img className="navigation__logo" src={filmy} alt="logo" />
            <ul className="navigation_ul">
                <li className="navigation_li">
                    <Link to="/" className="navigation__link" >Wyszukaj film</Link>
                    {/* <a href="/" className="navigation__link">Wyszukaj film</a> */}
                </li>
                <li className="navigation_li">
                    <Link to="/actors" className="navigation__link" >Aktorzy</Link>
                    {/* <a href="/actors" className="navigation__link">Aktorzy</a> */}
                </li>
                <li className="navigation_li">
                    <Link to="/popular" className="navigation__link" >Najpopularniejsze filmy w tygodniu</Link>
                    {/* <a href="/popular" className="navigation__link">Najpopularniejsze filmy tygodnia</a> */}
                </li>
            </ul>
        </nav>
    )
}

export default Navigation