import React, { useState } from 'react';
import "./css/Movies.css"
import noPhoto from "./noPhoto.jpg"
import Modal from "./Modal"

const Movies = ({ movies = [], }) => {

    const [modal, setModal] = useState(false)
    const [id, setId] = useState(null)
    const [description, setDescription] = useState(null)


    const showInformationAboutMovie = (id, description) => {
        setId(id)
        setDescription(description)
        setModal(true)

    }

    const results = movies.map(el => (
        < div className="single_movie" key={el.id} onClick={() => showInformationAboutMovie(el.id, el.overview)}>
            <h4 className="single_movie-title">{el.title || el.name} </h4>
            {
                el.poster_path ? <img src={`https://image.tmdb.org/t/p/w185${el.poster_path}`} alt="poster of movie" /> : <img src={noPhoto} alt="empty" />
            }
            < p className="single_movie-vote"> Ocena internautów: {el.vote_average}</p >
        </div >

    ))
    console.log(results)
    return (
        <div className="container_movies">
            {modal ? <Modal id={id} description={description} /> : results}
        </div>
    )
}

export default Movies