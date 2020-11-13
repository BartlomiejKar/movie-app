import React from 'react';

import Movies from "./Movies"
import Modal from "./Modal"

const Results = ({ modal, description, title, showInformationAboutMovie, closeInformationAboutMovie, movies }) => {

    const results = modal ? <Modal description={description} title={title} closeInformationAboutMovie={closeInformationAboutMovie} /> : <Movies showInformationAboutMovie={showInformationAboutMovie} movies={movies} />


    return (
        results
    )
}


export default Results