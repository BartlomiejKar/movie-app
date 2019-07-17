import React from 'react';




const Trending = (props) => {


    const trending = (props.popular).map(item => (


        < div className="div_trend" key={item.id} >
            <h4>{item.name || item.title}</h4>{
                item.poster_path !== null ? <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt="poster of movie" /> : <img src="https://pics.clipartpng.com/midle/No_Photography_Prohibition_Sign_PNG_Clipart-829.png" alt="empty" style={{ width: 185 }} />
            }

            <button key={item.id} className="button" onClick={props.handleClick}>{props.active ? "OPIS FILMU" : "SCHOWAJ"}</button>
            {
                props.active ? <p></p> : <p>{item.overview}</p>
            }



        </ div>

    ))




    return (
        <div className="trend">

            {trending}
        </div>
    )
}





export default Trending

