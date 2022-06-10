import React from "react";
import Nav from "./Nav";
import Skills from "./Skills";
import styles from "./AboutMe.module.css"
import Carrusel from "./Carrusel";
import { useSelector } from "react-redux";

export default function AboutMe(){
    const darkMode = useSelector(state => state.darkMode)

    return(
        <div className={styles.home}>
        <div className={styles.container}>
            <div className={styles.arriba}>
            <div className={ darkMode ? styles.wrapper : styles.wrapper2}>
            <h2 className={styles.titulo1}> SOBRE MI</h2>
            <div className={styles.parrafo}>
            <p className={styles.parrafo2}>Nací un 5 de noviembre del 2001 en Buenos Aires, Argentina.</p> 
            <p className={styles.parrafo2}>En 2020, época de pandemía, decidí dar un giro en mi vida y entrar en el mundo IT. 
            Hoy en día soy un <a style={ darkMode ? { color: " rgb(0,0,60)"} : { color: "rgb(0, 0, 156)"} }> DESARROLLADOR WEB FULL STACK </a>. Tengo experiencia creando apps desde <a style={ darkMode ? { color: "rgb(0,0,60)"} : { color: "rgb(0, 0, 156)"} }> FRONT-END </a> y <a style={ darkMode ? { color: "rgb(0,0,60)"} : { color: "rgb(0, 0, 156)"} }>BACK-END</a>. </p>
            <p className={styles.parrafo2}>Soy una persona comprometida y apasionado por lo que hago. Estoy en búsqueda de nuevos desafíos donde pueda desarrollarme como profesional y adquirir nuevos conocimientos. </p>
            </div>
            </div>
            {
                darkMode?
                <svg className={styles.curvas} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(0,0,60)"  fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,208C840,235,960,245,1080,240C1200,235,1320,213,1380,202.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
             </path></svg> :
             <svg className={styles.curvas} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff"   fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,138.7C480,139,600,181,720,208C840,235,960,245,1080,240C1200,235,1320,213,1380,202.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
             </path></svg> 
            }
            <div className={styles.wrapper1}>
            <h2 className={darkMode? styles.titulo2 : styles.titulo22}> EDUCACIÓN</h2>
            <div className={styles.education}>
            <Carrusel/>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}