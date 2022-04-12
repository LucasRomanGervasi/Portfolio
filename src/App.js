import { render } from 'react-dom';
import React, {useState, createRef} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import ReadingProgress from './Components/ReadingProgress';
import Home from "./Components/Home"
import AboutMe from "./Components/AboutMe"
import Contacts from './Components/Contacts'
import Proyect from "./Components/Proyect"
import FoodApp from "./Components/FoodApp"
import RestoBook from "./Components/RestoBook"
import Nav from "./Components/Nav";
import Skills from "./Components/Skills";
import { BiArrowFromBottom } from "react-icons/bi";
import ReadingProgres from "./Components/ReadingProgress";

 function Inicio() {
   const [btn, setBtn] = useState(true)

  window.addEventListener("scroll", function scroll(){
      console.log((document.body.getBoundingClientRect()).top)
      if ((document.body.getBoundingClientRect()).top < -120){
        setBtn(false)
       } else {
         setBtn(true)
       }
   });
  return (
    <div className="App">
    <div   className="Nav"> <Nav/> </div>
    <div className='Reading'><ReadingProgress/></div>
    <div className="Home" id="home">    <Home/> </div>
    <div className={btn ? 'no' : 'containerbtn'}>
      <a className='btn' href="#home"><BiArrowFromBottom/></a>
    </div>
    <div className="About" id="aboutMe"> <AboutMe/> </div>
    <div className="Skills" id="tecnologias"> <Skills/> </div>
    <div id="proyect"> <Proyect/> </div>
    <div id="contacts"> <Contacts/> </div> 
    </div>
  );
}

export default function App(){
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Inicio/>}/>
    <Route exact path='/TodaysMenu' id="FoodApp" element={<FoodApp/>}/>
    <Route exact path='/RestoBook' element={<RestoBook/>}/>
  </Routes>
  </BrowserRouter>
  )
}


