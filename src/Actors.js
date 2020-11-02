import React, { useEffect, useState } from 'react';



const Actors = ({ ApiKey }) => {
    const [actors, setActors] = useState([]);
    const [value, setValue] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${ApiKey}&language=en-US&query=jason&page=1&include_adult=false`);
            const data = await response.json()
            const results = data.results
            const knownFor = data.results[0].known_for[0].title
            console.log(knownFor)
            setActors(results)
        }
        fetchData()
    }, [])
    console.log(actors)
    const ActorsArray = actors.map(el => {
        return (
            <div>
                <p>{el.name}</p>
                <p>{el.popularity}</p>
                <p>{el.known_for[0].title}</p>
            </div>
        )
    })
    return (
        <>
            < p >Aktorzy</p >
            {ActorsArray}
        </>

    )
};

export default Actors