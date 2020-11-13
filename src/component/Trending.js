import React from 'react';

import "../css/Trending.css"

const Trending = ({ popular = [] }) => {
    const trending = (popular).map(el => (
        < div className="trending_container" key={el.id} >
            <h4 className="trending_movieName">{el.name || el.title}</h4>{
                el.poster_path !== null || el.profile_path !== null ? <img className="trending_img" src={`https://image.tmdb.org/t/p/w185${el.poster_path}`} alt="poster of movie" /> : <img className="trending_img" src="https://www.slodkiprzystanek.pl/img/no-photo-available.png" alt="empty" style={{ width: 185 }} />
            }
        </ div >

    ))

    return (
        <>
            <h4 className='trending_title'>
                Najpopularniejsze filmy w tygodniu:
                </h4>
            <div className="trending_container-movies">
                {trending}
            </div>
        </>


    )
}
export default Trending;

