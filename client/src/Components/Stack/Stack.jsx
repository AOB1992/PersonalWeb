import React, { Component } from 'react';
import "./Stack.css" //IMPORT STYLES
import ReactWhatsapp from 'react-whatsapp'; //IMPORT WHATSAPP
//IMPORT COMPONENTS WHICK COMPOSE THIS COMPONENT
import Lowbar from "../Lowbar/Lowbar"
import Topbar from "../Topbar/Topbar"

const Stack = () => {

    return (
        <div className='generalmain'>
            <div className='topbardiv'><Topbar></Topbar></div>
            <h1>STACK</h1>
            <div className='lowbardiv'><Lowbar></Lowbar></div>
        </div>
    )
}

export default Stack