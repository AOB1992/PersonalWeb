import './App.css';
import {Route} from "react-router-dom"
import {Router} from "react-router-dom"
import {BrowserRouter} from "react-router-dom"
import React from 'react';
//IMPORTING COMPONENTS
import Landing from "./Components/Landing/Landing";
import Main from "./Components/Main/Main";
import Contact from "./Components/Contact/Contact";
import Stack from "./Components/Stack/Stack";
import Portfolio from "./Components/Portfolio/Portfolio";
import Topbar from "./Components/Topbar/Topbar";
import Lowbar from "./Components/Lowbar/Lowbar"

function App() {
  return (
   
    <div className="App">
      
      <BrowserRouter>
      
      <Route exact path="/main" component={Main} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/stack" component={Stack} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/" component={Landing} />
      </BrowserRouter>
    </div>
  );
}

export default App;
