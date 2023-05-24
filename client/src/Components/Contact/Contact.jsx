import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./Contact.css" //IMPORT STYLES
import ReactWhatsapp from 'react-whatsapp'; //IMPORT WHATSAPP
//IMPORT COMPONENTS WHICK COMPOSE THIS COMPONENT
import Lowbar from "../Lowbar/Lowbar"
import Topbar from "../Topbar/Topbar"
//
import foto from "../Topbar/Pics/ale3.jpg" //IMPORT LEFT SIDE PHOTO
import foto2 from "../Topbar/Pics/ale4.jpg" //IMPORT COLOUR SIDE PHOTO
import Card2 from "../Card2/Card2" //IMPORT CARD COMPONENT
import Cardwh from "../Cardwh/Cardwh" //IMPORT CARD COMPONENT
//IMPORT PHOTOS FOR CARDS
import linkedin from "../Topbar/Pics/linkedin2.png"
import github from "../Topbar/Pics/github.jpg"
import contact from "../Topbar/Pics/contact2.png"
import stack from "../Topbar/Pics/stack.png"
import whatsapp2 from "../Topbar/Pics/whatsapp.avif"
import whatsapp from "../Topbar/Pics/whatsapp2.png"
import portfolio5 from "../Topbar/Pics/portfolio9.png"

const Contact = () => {

    return (
        <div className='xgeneralcontactmainx'>
             <div className='topbardiv'><Topbar></Topbar></div>
                     <div className='generalcontact'>
                     <div className='carddivcontact'>
           <Link to={{ pathname: "https://www.linkedin.com/in/a-ob/" }} target="_blank"><Card2 image={linkedin} itext='' key="LINKEDIN"></Card2></Link>
           <h6 className='contactdata'>ALEJANDRO OHRNIALIAN BENGOLEA</h6>
           </div>
           <div className='carddivcontact'>
           <ReactWhatsapp id="reactwh" number="+5491127948745" message="Hello Alejandro! I am looking forward to contact you" element="component"><Cardwh></Cardwh></ReactWhatsapp >
           <h6 className='contactdata'>+54911 2794 8745</h6>
           </div>
           <div className='carddivcontact'>
           <Card2 image={contact} itext='' key="CONTACT"></Card2>
            <h6 className='contactdata'>AOB@LIVE.COM.AR</h6>
           </div>
           
           
           <div className='carddivcontact'>
           <Link to={{ pathname: "https://github.com/AOB1992" }} target="_blank"><Card2 image={github} itext='' key="GIT"></Card2></Link>
           <h6 className='contactdata'>AOB1992</h6>
           </div>
           
                    </div>
                    <div className='lowbardiv'><Lowbar></Lowbar></div>
        </div>
    )
}

export default Contact