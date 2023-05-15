import React, { Component } from 'react';
import ReactWhatsapp from 'react-whatsapp'; //IMPORT WHATSAPP
import "./Topbar.css" //IMPORT STYLES
import { Link } from "react-router-dom"
import foto from "./ale3.jpg" //IMPORT LEFT SIDE PHOTO
import foto2 from "./ale4.jpg" //IMPORT COLOUR SIDE PHOTO
import Card2 from "../Card2/Card2" //IMPORT CARD COMPONENT
import Cardwh from "../Cardwh/Cardwh" //IMPORT CARD COMPONENT
//IMPORT PHOTOS FOR CARDS
import linkedin from "./Pics/linkedin2.png"
import github from "./Pics/github.jpg"
import contact from "./Pics/contact2.png"
import stack from "./Pics/stack.png"
import whatsapp2 from "./Pics/whatsapp.avif"
import whatsapp from "./Pics/whatsapp2.png"
import portfolio5 from "./Pics/portfolio9.png"

const Topbar = () => {

    function piccolor (e) {
        let theimage = document.getElementById("personalpic")
        theimage.src = foto2
    }
    function picgrey (e) {
        let theimage = document.getElementById("personalpic")
        theimage.src = foto
    }
 
  
   //let leelement = "<Card2 image={whatsapp} itext='' key="whatsapp"></Card2>"
    return (
        <div className="generaltopbar">
           <img id="personalpic" src={foto} alt="foto" className='smallimage' onMouseOver={(e) => piccolor(e) } onMouseOut={(e) => picgrey(e) }></img>
           <Link  to="/main"><Card2 image={portfolio5} itext='' key="portfolio5"></Card2></Link>
           <Link  to="/main"><Card2 image={contact} itext='' key="CONTACT"></Card2></Link>
           <Link to="/main"><ReactWhatsapp id="reactwh" number="+5491127948745" message="Hello Alejandro! I am looking forward to contact you" element="component"><Cardwh></Cardwh></ReactWhatsapp ></Link>
           {/* <Link to={{ pathname: "https://www.linkedin.com/in/a-ob/" }} target="_blank"><Card2 image={whatsapp} itext='' key="whatsapp"></Card2></Link> */}
           <Link to={{ pathname: "https://www.linkedin.com/in/a-ob/" }} target="_blank"><Card2 image={linkedin} itext='' key="LINKEDIN"></Card2></Link>
           <Link to={{ pathname: "https://github.com/AOB1992" }} target="_blank"><Card2 image={github} itext='' key="GIT"></Card2></Link>
           <Link  to="/main"><Card2 image={stack} itext='' key="STACK"></Card2></Link>
        </div>
    )
}

export default Topbar