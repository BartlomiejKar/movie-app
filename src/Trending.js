import React from 'react';


const Trending = (props) => {
    const trending = (props.popular).map(item => (
        < div className="div_trend" key={item.id} >
            <h4>{item.name || item.title}</h4>{
                item.poster_path !== null || item.profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt="poster of movie" /> : <img src="https://www.slodkiprzystanek.pl/img/no-photo-available.png" alt="empty" style={{ width: 185 }} />
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

