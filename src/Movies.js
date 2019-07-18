import React from 'react';
import './App.css';




const Movies = (props) => {


    const results = (props.results || []).map(item => (

        < div className="movies_div" key={item.id} >
            <h4>{item.title || item.name} </h4>{

                item.poster_path !== null ? <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt="poster of movie" /> : <img src="https://github.com/BartlomiejKar/movie-app/blob/master/src/img/no-photo-svgrepo-com.svg" alt="empty" style={{ width: 185 }} />
            }
            <p>Ocena internautów: {item.vote_average}</p>

        </div >

    ))



    return (
        <div className="container_movies">

            {results}

        </div>
    )

}

export default Movies