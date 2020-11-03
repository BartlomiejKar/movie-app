import React, { useState } from 'react';


import "./css/Actors.css"
import noPhoto from "./noPhoto.jpg"


const Actors = ({ ApiKey }) => {
    const [actors, setActors] = useState([]);
    const [value, setValue] = useState("")


    const handleSearchActor = (e) => {
        const value = e.target.value
        setValue(value)
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${ApiKey}&language=en-US&query=${value}&page=1&include_adult=false`);
            const data = await response.json()
            const results = data.results
            setActors(results)
        }
        fetchData()
    }


    const ActorsArray = actors ? actors.map(({ id, name, popularity, known_for, profile_path }) => {

        const knowFromMovies = known_for.map((el, index) => {
            return (
                <li className="actor_list" key={index}>{el.title}</li>
            )

        })

        return (
            <div className="actor_container" key={id}>
                <p className="actor_name">{name}</p>
                <ul>{knowFromMovies}</ul>
                {profile_path ? < img className="actor_img" alt="aktor" src={`https://image.tmdb.org/t/p/w185${profile_path}`} /> : <img className="actor_img" src={noPhoto} alt="empty" />}
                <p className="actor_popularity">{popularity}</p>
            </div>
        )
    }) : null


    return (
        <>
            < p >Aktorzy</p >
            <input placeholder="wyszukaj aktora" value={value} onChange={handleSearchActor} type="text" />
            {ActorsArray}
        </>

    )
};

export default Actors