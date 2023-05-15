import React, { Component } from 'react';
import "./Card2.css" //IMPORT STYLES

const Card2 = (props) => {

    return (
        <div className="generalcard2">

            <img src={props.image} alt={props.itext} className='logoimage'></img>

        </div>
    )
}

export default Card2