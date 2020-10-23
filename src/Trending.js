import React from 'react';


const Trending = ({ popular = [] }) => {
    const trending = (popular).map(el => (

        < div className="div_trend" key={el.id} >
            <h4>{el.name || el.title}</h4>{
                el.poster_path !== null || el.profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w185${el.poster_path}`} alt="poster of movie" /> : <img src="https://www.slodkiprzystanek.pl/img/no-photo-available.png" alt="empty" style={{ width: 185 }} />
            }
        </ div >
    ))
    return (
        <div className="trend">
            {trending}
        </div>
    )
}
export default Trending;

