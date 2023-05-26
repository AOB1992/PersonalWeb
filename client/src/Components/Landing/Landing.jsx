import React, { Component } from 'react';
import "./Landing.css"
import { Link } from "react-router-dom"
import Lowbar from "../Lowbar/Lowbar" 
import foto from "./Pics/ale.jpeg"

const Landing = () => {

    return (
        <div className="generallanding">
            <div className="Lowbarlanding"><Lowbar className="Lowbarlanding"></Lowbar> </div>
            
            <div className='listlanding'>
                <h1 className='titlelanding'>ALEJANDRO </h1>
                <h1 className='titlelanding'>FULL-STACK DEVELOPER</h1>
                
                <img src={foto} alt="foto" className='personalimage'></img>
                <p></p>
                <div><Link to="/main" ><button className='buttonlanding'>   Enter Site  </button></Link></div>
                <h1></h1>
                <p></p>
            </div>
            
                
        </div>
    )
}

export default Landing