import React from 'react';
import './App.css';



const Movies = (props) => {


    const results = (props.results || []).map(item => (

        < div className="movies_div" key={item.id} >
            <h4>{item.title || item.name} </h4>{

                item.poster_path !== null ? <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt="poster of movie" /> : <img src="https://pics.clipartpng.com/midle/No_Photography_Prohibition_Sign_PNG_Clipart-829.png" alt="empty" style={{ width: 185 }} />
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