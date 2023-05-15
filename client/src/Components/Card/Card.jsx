import React, { Component } from 'react';
import "./Card.css" //IMPORT STYLES




const Card = (props) => {
    return (
        <div className="generalcard">
            <img src={props.image} alt={props.itext} className='logoimagecard'></img>
            <h6 className='logotext'>{props.itext}</h6>
        </div>
    )
}

export default Card