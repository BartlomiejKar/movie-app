import React from 'react';

import "../css/Navigation.css"

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation_ul">
                <li className="navigation_li">
                    <a href="/" className="navigation__link">Wyszukaj film</a>
                </li>
                <li className="navigation_li">
                    <a href="/actors" className="navigation__link">Aktorzy</a>
                </li>
                <li className="navigation_li">
                    <a href="/popular" className="navigation__link">Najpopularniejsze filmy tygodnia</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation