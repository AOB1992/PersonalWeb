import React, { Component } from 'react';
import { Link } from "react-router-dom"
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
 //IMPORT FILE TO DOWNLOAD
 import filecv from "./Files/Resume.pdf"
 import cambridgefile from "./Files/ENGLISH_FIRST_CERTIFICATE.pdf"
 import henryfile from "./Files/HENRY_CERTIFICATE.pdf"
 

const Main = () => {

    return (
        <div className='divgeneralmain'>
            <div className='topbardiv'><Topbar></Topbar></div>

                <div className='maindisplay'>
                    
                    <div className='divpersonalimagemain'>
                        <p></p>
                        {/* <h6>AOB</h6> */}
                    <img src={foto} alt="foto" className='personalimagemain'></img>
                    
                    </div>

                    <div className='maincertificates'>
                        <div className='submaincertificates'>
                        <a  className='submaincertificates' href={cambridgefile}  download="FIRST_CERTIFICATE_AOB"  target="_blank"  rel="noreferrer" >
                        <Card2 image={cambridge} className='submaincertificates' ></Card2>
                                 </a>
                       
                        <a  className='submaincertificates' href={filecv}  download="Resume_AOB"  target="_blank"  rel="noreferrer" >
                                    <Card2 className='submaincertificates' image={cv}></Card2>
                                 </a>
                        {/* <Link to={{ pathname: "https://certificates.soyhenry.com/new-cert?id=45638f7141708eab6aec3f23f2e751df511dd4b3b102e443feb2ebbe54d3cefc" }} target="_blank"><Card2 image={henry}></Card2></Link> */}
                        <a  className='submaincertificates' href={henryfile}  download="HENRY_CERTIFICATE_AOB"  target="_blank"  rel="noreferrer" >
                            <Card2 className='submaincertificates' image={henry}></Card2>
                                 </a>
                        </div>
                    </div>
    
                    <div className='maintextdiv'>
                        <div className='maintext'>
                        <p className='maintextp' key="text1">{biotext}</p>
                         </div>
                    </div>
                </div>
            <div className='lowbardiv'><Lowbar></Lowbar></div>
        </div>
    )
}

export default Main