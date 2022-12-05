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
import {useSelector} from "react-redux"

 function Inicio() {
  const darkMode = useSelector(state => state.darkMode)
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
    <div className={ darkMode ? "App2" : "App"}>
    <div className="Nav"> <Nav/> </div>
    <div className='Reading'><ReadingProgress/></div>
    <div className="Home" id="home">    <Home/> </div>
    <div className={btn ? 'no' : 'containerbtn'}>
      <a  href="#home"> <span
      className="btn">
      <BiArrowFromBottom/> 
        </span></a>
    </div>
    <div className="About" id="aboutMe"> <AboutMe/> </div>
    <div className="Skills" id="tecnologias"> <Skills/> </div>
    {darkMode? 
    <div className='curvas'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,96L60,122.7C120,149,240,203,360,213.3C480,224,600,192,720,160C840,128,960,96,1080,80C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
          </path></svg>
    </div>
          :
          <div className='curvas2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L60,122.7C120,149,240,203,360,213.3C480,224,600,192,720,160C840,128,960,96,1080,80C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
          </path></svg>
          </div>
          }
     <div id="proyect" > <Proyect/> </div> 
    <div id="contacts"><Contacts/> </div> 
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


