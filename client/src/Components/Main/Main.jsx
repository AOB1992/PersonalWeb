import React, { Component } from 'react';
import "./Main.css" //IMPORT STYLES
import ReactWhatsapp from 'react-whatsapp'; //IMPORT WHATSAPP
//IMPORT COMPONENTS WHICK COMPOSE THIS COMPONENT
import Lowbar from "../Lowbar/Lowbar" 
import Topbar from "../Topbar/Topbar"
import Card2 from "../Card2/Card2" //IMPORT CARD COMPONENT
//PHOTO
import foto from "../Landing/Pics/ale.jpeg"
//IMPORT TEXT
import biotext from "./Text.js"
import salutations from "./Salutations.js"
//IMPORT PHOTOS FOR CARDS
import cambridge from "./Pics/cambridge4.png"
 import cv from "./Pics/cv4.jpg"
 import henry from "./Pics/henry.png"


const Main = () => {

    return (
        <div className='generalmain'>
            <div className='topbardiv'><Topbar></Topbar></div>

                <div className='maindisplay'>
                    
                    <div className='divpersonalimagemain'>
                    <img src={foto} alt="foto" className='personalimagemain'></img>
                    </div>

                    <div className='maincertificates'>
                        <div className='submaincertificates'>
                        <Card2 image={cambridge}></Card2>
                        <Card2 image={cv}></Card2>
                        <Card2 image={henry}></Card2>
                        </div>
                    </div>
                        

                    <div className='maintextdiv'>
                        <p></p>
                        <div className='maintext'>
                        <p className='maintextp' key="text1">{biotext}</p>
                        
                        </div>
                        <div className='maintext'>
                        
                        
                        </div>
                    </div>
                </div>
            <div className='lowbardiv'><Lowbar></Lowbar></div>
        </div>
    )
}

export default Main