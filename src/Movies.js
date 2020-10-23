import React from 'react';
import '../src/css/App.css';

const Movies = ({ movies = [] }) => {

    const results = movies.map(el => (

        < div className="movies_div" key={el.id} >
            <h4>{el.title || el.name} </h4>{
                el.poster_path !== null ? <img src={`https://image.tmdb.org/t/p/w185${el.poster_path}`} alt="poster of movie" /> : <img src="https://www.slodkiprzystanek.pl/img/no-photo-available.png" alt="empty" style={{ width: 185 }} />
            }
            < p > Ocena internautów: {el.vote_average}</p >
        </div >
    ))




    return (
        <div className="container_movies">
            {results}
        </div>
    )
}

export default Movies