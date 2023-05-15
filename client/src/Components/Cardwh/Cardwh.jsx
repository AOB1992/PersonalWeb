import React, { Component } from 'react';
import "./Cardwh.css" //IMPORT STYLES
import whatsapp from "./whatsapp2.png"



const Cardwh = (props) => {

    console.log("IMAGE ES...")
    console.log(props.image)
    console.log("ITEXT ES...")
    console.log(props.itext)
    return (
        <div className="generalcard">
             
            <img src={whatsapp} alt={props.itext} className='logoimage'></img>
           
          {/* <h6 className='logotext'>{props.itext}</h6> */}
        </div>
    )
}

export default Cardwh