import React from "react";
import Nav from "./Nav";
import Skills from "./Skills";
import styles from "./AboutMe.module.css"
import Carrusel from "./Carrusel";

export default function AboutMe(){
    return(
        <div className={styles.home}>
        <div className={styles.container}>
            <div className={styles.arriba}>
            <div className={styles.wrapper}>
            <h2 className={styles.titulo1}> SOBRE MI</h2>
            <div className={styles.parrafo}>
            <p className={styles.parrafo2}>Nací un 5 de noviembre del 2001 en Buenos Aires, Argentina.</p> 
            <p className={styles.parrafo2}>En 2020, época de pandemía, decidí dar un giro en mi vida y entrar en el mundo IT. 
            Hoy en día soy un <a style={{color: "rgb(0, 0, 156)"}}> DESARROLLADOR WEB FULL STACK </a>. Tengo experiencia creando apps desde <a style={{color: "rgb(0, 0, 156)"}}> FRONT-END </a> y <a style={{color: "rgb(0, 0, 156)"}}>BACK-END</a>. </p>
            <p className={styles.parrafo2}>Soy una persona comprometida y apasionado por lo que hago. Estoy en búsqueda de nuevos desafíos, donde pueda desarrollarme como profesional y adquirir nuevos conocimientos. </p>
            </div>
            </div>
            <div className={styles.wrapper1}>
            <h2 className={styles.titulo2}> EDUCACIÓN</h2>
            <div className={styles.education}>
            <Carrusel/>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}