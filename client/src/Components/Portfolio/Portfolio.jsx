import React, { Component } from 'react';
import "./Portfolio.css" //IMPORT STYLES
import ReactWhatsapp from 'react-whatsapp'; //IMPORT WHATSAPP
//IMPORT COMPONENTS WHICK COMPOSE THIS COMPONENT
import Lowbar from "../Lowbar/Lowbar"
import Topbar from "../Topbar/Topbar"
import Cardportfolio from "../Cardportfolio/Cardportfolio"

//IMPORT PHOTOS
import gaming from "./Pics/gaming1.png"
import personal from "./Pics/personal.png"
import countries from "./Pics/countries.png"

const Portfolio = () => {

    return (
        <div className='generalportfolio'>
            <div className='topbardiv'><Topbar></Topbar></div>
                <div className='portfoliodark'>
                        {/* <h1>PORTFOLIO PROYECTS</h1> */}
                        <Cardportfolio photo={personal} title="Personal Web Page" link="https://gp-front.vercel.app/" techs="React Redux" type="Personal Site"></Cardportfolio>
                        <Cardportfolio photo={gaming} title="Gaming Palace" linkgit="https://github.com/AOB1992/GamePalaceBack" link="https://gp-front.vercel.app/" techs="React Redux" type="Ecommerce"></Cardportfolio>
                        <Cardportfolio photo={countries} title="Countries API Consumer" linkgit="https://github.com/AOB1992/PI/tree/master" link="" techs="React Redux" type="API Consumer"></Cardportfolio>
                </div>
                <div className='portfoliospacemaker'>
                    <p>    </p>
                </div>
                <div className='lowbardiv'><Lowbar></Lowbar></div>
        </div>
    )
}

export default Portfolio