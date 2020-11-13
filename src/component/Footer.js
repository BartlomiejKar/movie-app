import React from 'react';

import "../css/Footer.css"
import github from "../img/GitHub-Mark-Light-64px.png"



const Footer = () => {
    return (
        <footer>
            <a className="footer_github" href="https://github.com/BartlomiejKar"> <img className="footer_github" src={github} alt="github" /></a>

            <ul className="footer_list">
                <li className="footer_element-li"><a href="https://www.imdb.com/" className="footer_link">IMDB</a></li>
                <li className="footer_element-li"><a href="https://www.filmweb.pl/" className="footer_link">Filmweb</a></li>
                <li className="footer_element-li"><a href="https://www.themoviedb.org" className="footer_link">The Movie DB</a> </li>
            </ul>
        </footer>
    )
}

export default Footer