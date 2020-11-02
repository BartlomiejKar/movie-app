import React, { useEffect, useState } from 'react';



const Actors = ({ ApiKey }) => {
    const [actors, setActors] = useState([]);
    // const [value, setValue] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${ApiKey}&language=en-US&query=jason Star&page=1&include_adult=false`);
            const data = await response.json()
            const results = data.results
            console.log(results)
            setActors(results)
        }
        fetchData()
    }, [])
    const ActorsArray = actors.map(({ id, name, popularity, known_for }) => {

        const knowFromMovies = known_for.map(el => {
            return el.title
        })
        return (
            <div key={id}>
                <p>{name}</p>
                <p>{popularity}</p>
                <p>{knowFromMovies}</p>
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