import React, { useState } from "react";
import styles from "./Nav.module.css"
import logo from "../img/LG.png" 
import { FaBars } from "react-icons/fa";
import {IoClose} from "react-icons/io5";
import {  BsGithub, BsWhatsapp } from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


export default function Nav(){
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
                    <a className={styles.boton} href="#aboutMe">SOBRE MI</a>
                    <a className={styles.boton} href="#tecnologias">HABILIDADES </a>
                    <a className={styles.boton} href="#proyect">PROYECTOS</a>
                    <a className={styles.boton} href="#contacts">CONTACTO </a>
                </div>
                <div className={ nav ? styles.botonera2  : styles.botonera3 }>
                    <a className={styles.burger} onClick={() => setSohwMobileBurger(!showMobileBurger)}>{!showMobileBurger? <FaBars/> : <IoClose/>}
                    </a>
                </div>
                    {showMobileBurger? 
                <div className={styles.botones2}>
                <div className={styles.containerBurger}>
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