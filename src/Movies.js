import React from 'react';
import "./css/Movies.css"
import noPhoto from "./noPhoto.jpg"


const Movies = ({ movies = [], showInformationAboutMovie }) => {

    const results = movies.map(el => (
        < div className="single_movie" key={el.id} onClick={() => showInformationAboutMovie(el.id, el.overview, el.title)}>
            <h4 className="single_movie-title">{el.title || el.name} </h4>
            {
                el.poster_path ? <img src={`https://image.tmdb.org/t/p/w185${el.poster_path}`} alt="poster of movie" /> : <img src={noPhoto} alt="empty" />
            }
            < p className="single_movie-vote"> Ocena internautów: {el.vote_average}</p >
        </div >

    ))
    return (
        <div className="container_movies">
            {results}
        </div>
    )
}

export default Movies