import React, { Component } from 'react';
import "./Lowbar.css"
//IMPORT PICS FOR REACT
import js from "./Pics/js.png"
import react from "./Pics/react.png"
import node from "./Pics/node.jpg"
import node2 from "./Pics/node2.jpg"
import html5 from "./Pics/html5.png"
import css from "./Pics/css.png"
import redux from "./Pics/redux.png"
import sql from "./Pics/sql3.png"
import es6 from "./Pics/es6.png"
import ajax from "./Pics/ajax.png"
import jquery from "./Pics/jquery.jpg"
import postgre from "./Pics/postgre.png"
import gitpic from "./Pics/github.jpg"
import agile from "./Pics/agile4.avif"
//IMPORT LOGO COMPONENT
import Card from "../Card/Card"

const Lowbar = () => {

    return (
        <div className="glb">
            
            
            <div className="glb">
            <Card image={js} itext='JS' key="js"></Card>
            <Card image={es6} itext='ES6' key="es6"></Card>
            <Card image={jquery} itext='JQUERY' key="jquery"></Card>
            <Card image={ajax} itext='AJAX' key="ajax"></Card>
            <Card image={html5} itext='HTML 5' key="html5"></Card>
            <Card image={css} itext='CSS' key="css"></Card>
            </div>
            <div className="glb2"> 
            <Card className="carddiv2" image={node} itext='NODE' key="node"></Card> 
            <Card className="carddiv2" image={react} itext='REACT' key="react"></Card>
            <Card className="carddiv2" image={redux} itext='REDUX' key="redux"></Card>
            <Card className="carddiv2" image={sql} itext='SQL' key="sql"></Card>
            <Card className="carddiv2" image={postgre} itext='POSTGRE SQL' key="postgre"></Card>
            <Card className="carddiv2" image={gitpic} itext='GITHUB' key="github"></Card>
            <Card className="carddiv2" image={agile} itext='AGILE METODOLOGIES' key="agile"></Card>
            </div>
           
            
        </div>
    )
}

export default Lowbar