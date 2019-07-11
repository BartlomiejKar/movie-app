import React from 'react';



const Movies = (props) => {


    const results = (props.results || []).map(item => (

        < div key={item.id} >
            <h4>{item.title} </h4>{

                item.poster_path !== null ? <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt="poster of movie" /> : <img src="https://pics.clipartpng.com/midle/No_Photography_Prohibition_Sign_PNG_Clipart-829.png" alt="empty" style={{ width: 185 }} />
            }
            <p>Ocena internautów: {item.vote_average}</p>

        </div >

    ))



    return (
        <div>
            <ul>
                {results}
            </ul>
        </div>
    )

}

export default Movies