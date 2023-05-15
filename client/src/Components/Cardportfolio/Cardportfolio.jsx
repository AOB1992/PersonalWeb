import React, { Component } from 'react';
import "./Cardportfolio.css" //IMPORT STYLES
import { Link } from "react-router-dom"
import github from "./Pics/github.jpg" //IMPORT GITHUB PIC
import photolink from "./Pics/link4.webp" //IMPORT GITHUB PIC
import Card2 from '../Card2/Card2'; //IMPORT PIC CARD COMPONENT

const Cardportfolio = (props) => {

   let linkobject = {
    pathname: props.link
   }
   let linkobject2 = {
    pathname: props.linkgit
   }
    return (
        <div className="cardportfolios">
             
             <div className="cardportfolio">
             <h1 className="portfoliotitle">{props.title}</h1>
            <img src={props.photo} alt={props.title} className='photoportfolio'></img>
            <div className="portfoliocardcontainer">
            
            <Link to={linkobject2} target="_blank"><Card2 image={github}></Card2></Link>
            <Link to={linkobject} target="_blank"><Card2 image={photolink}></Card2></Link>
            </div>
            <h4 className="portfoliotext">PROYECT TYPE: {props.type}</h4>
            <h4 className="portfoliotext">TECHS USED: {props.techs}</h4>
            
            
            </div>
        </div>
    )
}

export default Cardportfolio