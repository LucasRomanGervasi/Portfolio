import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Nav.module.css"
import { FaBars } from "react-icons/fa";
import {IoClose} from "react-icons/io5";
import {  BsGithub, BsWhatsapp } from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {changeMode} from "../redux/actions.js"
import logo from "../img/logo.png"
import { useSelector } from "react-redux";


export default function Nav(){
  const darkMode = useSelector(state => state.darkMode)
    const dispatch = useDispatch()
    const handleClick = () => {        
        dispatch(changeMode())
    }
    const [showMobileBurger, setSohwMobileBurger] = useState(false)
    const [nav, setNav] = useState(true)

    window.addEventListener("scroll", function scroll(){
        console.log((document.body.getBoundingClientRect()).top)
        if ((document.body.getBoundingClientRect()).top < -80){
          setNav(false)
         } else {
           setNav(true)
         }
     });
     

    return(
        <div className={  nav ? styles.botones : styles.botonesarriba}>
                <div className={styles.botonera}>
               <div className={styles.imagenContainer}>
                  <img className={styles.foto}
                  src={logo}>
                  </img>
                </div>
                    <a className={styles.boton} href="#aboutMe">SOBRE MI</a>
                    <a className={styles.boton} href="#tecnologias">HABILIDADES </a>
                    <a className={styles.boton} href="#proyect">PROYECTOS</a>
                    <a className={styles.boton} href="#contacts">CONTACTO </a>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onClick={handleClick} />
            <span className="slider round"> </span>
          </label>
    </div>
                </div>
                <div className={ nav ? styles.botonera2  : styles.botonera3 }>
                <div className={styles.imagenContainer2}>
                  <img className={styles.foto2}
                  src={logo}>
                  </img>
                </div>
                <div className="switch-checkbox">
               <label className="switch">
            <input type="checkbox" onClick={handleClick} />
            <span className="slider round"> </span>
          </label>
                 </div> 
                    <div className={styles.burger} onClick={() => setSohwMobileBurger(!showMobileBurger)}>{!showMobileBurger? 
                    <button className={styles.botoncontainer}>
                    <span className={styles.topline}> </span>
                    <span className={styles.middleline}></span>
                    <span className={styles.bottomline}></span>
                    </button>
                    : 
                    <button className={styles.botoncontainer}>
                    <span className={styles.topline2}> </span>
                    <span className={styles.middleline2}></span>
                    <span className={styles.bottomline2}></span>
                    </button>
                    }
                    </div>
                </div>
                    {showMobileBurger? 
                <div className={styles.botones2}>
                <div className={ darkMode ? styles.containerBurger2 : styles.containerBurger  }>
                <a className={styles.botonBurger} onClick={() => setSohwMobileBurger(!showMobileBurger)} href="#aboutMe">SOBRE MI</a>
                    <a className={styles.botonBurger} onClick={() => setSohwMobileBurger(!showMobileBurger)} href="#tecnologias">HABILIDADES </a>
                    <a className={styles.botonBurger} onClick={() => setSohwMobileBurger(!showMobileBurger)} href="#proyect">PROYECTOS</a>
                    <a className={styles.botonBurger} onClick={() => setSohwMobileBurger(!showMobileBurger)} href="#contacts">CONTACTO </a>
                    
                    <div className={styles.fin}>
                    </div>
                   
                    <div className={styles.redes}>
                    <a className={styles.a2} href="https://api.whatsapp.com/send?phone=+5491168020511&amp;text=Hola%20Lucas,%20me%20gustaría%20saber%20más%20sobre%20tu%20trabajo!">
                    <span className={styles.wpp}><BsWhatsapp/></span></a>
                    <a  className={styles.a2} href='https://github.com/LucasRomanGervasi'> <span className={styles.github}><BsGithub/></span> </a>
                    <a  className={styles.a2} href='https://www.linkedin.com/in/lucas-roman-gervasi-419463200/'> <span className={styles.linkedin}><FaLinkedinIn/></span> </a>
                    <a  className={styles.a2} href='https://www.instagram.com/lucasgervasi_/'> <span className={styles.instagram}><FaInstagram/></span> </a>
                    </div>
                    </div>
                    </div>
                    : null }
                    </div>
                    )
}