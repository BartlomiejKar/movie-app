import React from 'react';

import "./css/Modal.css"

const Modal = ({ id, description, title, closeInformationAboutMovie }) => {


    return (
        <div className="container_modal">
            <h4 className="container_modal-title">{title}</h4>
            <div className="container_modal-description">
                <p>{description}</p>
            </div>
            <button onClick={closeInformationAboutMovie} className="container_modal-button">Close</button>
        </div>
    )
}

export default Modal