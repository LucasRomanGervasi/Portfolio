import React from "react"
import styles from "./FoodApp.module.css"
import { FiArrowLeftCircle } from "react-icons/fi";
import restoBook from "../img/restoBook.png"
import { DiNodejsSmall, DiGit, DiHtml5, DiCss3, DiReact} from "react-icons/di";
import { SiRedux,SiPostgresql,SiFirebase, SiJavascript } from "react-icons/si";
import {  BsGithub } from "react-icons/bs";
import { FaTrello } from "react-icons/fa";

export default function RestoBook(){
    return(
        <div className={styles.FoodApp}>
        <div className={styles.container}>
        <div className={styles.boton}>
            <a className={styles.flecha} href="/#proyect"><FiArrowLeftCircle/></a>
            </div>
            <div className={styles.wrapper}>
            <h2 className={styles.titulo}> Resto Book</h2>
            <h1 className={styles.descripcion}>DESCRIPCIÓN</h1>
            <div className={styles.parrafo}>
            <p className={styles.parrafo2}>
            Con un grupo de 7 desarrolladores, creamos una app movil llamada Resto Book. La idea de la app es reducir el 
             tiempo para reservar e ir a un restaurant.
             Como usuario podes buscar los restaurant, ordenarlos, filtrarlos, ver el menu y 
             hacer una reserva en el mismo a traves de Mercado Pago. Como restaurant podes adminstrarla desde la app, modificando el horario de reserva, 
             el precio, agregar o eliminar comidas, y tambien ver sus estadisticas.</p>
            </div>
            </div>
            <div className={styles.imgRestoApp}>
                <img
                className={styles.img}
                src={restoBook}
                ></img>
            </div>
            <div className={styles.wrapper2}> 
            <h1 className={styles.titulo1}>TECNOLOGÍAS</h1>
            <div className={styles.tecnologiascontainer}>
           <div className={styles.tecnologiascontainer2}><h1 className={styles.titulo2}>FRONT END</h1>
            <h2 className={styles.tecnologias}> <span className={styles.react}><DiReact/></span> React Native</h2>
            <h2 className={styles.tecnologias}> <span className={styles.redux}><SiRedux/></span> Redux </h2>
            <h2 className={styles.tecnologias}> <span className={styles.html}><DiHtml5/></span> HTML </h2>
            <h2 className={styles.tecnologias}> <span className={styles.css}><DiCss3/></span> CSS </h2>
            </div>
           < div className={styles.tecnologiascontainer2}><h1 className={styles.titulo2}>BACK END</h1>
            <h2 className={styles.tecnologias}> <span className={styles.firebase}><SiFirebase/></span> Firebase </h2>
            </div>
            < div className={styles.tecnologiascontainer2}><h1 className={styles.titulo2}>OTRAS HERRAMIENTAS</h1>
            <h2 className={styles.tecnologias}> <span className={styles.git}><DiGit/></span>GIT </h2>
            <h2 className={styles.tecnologias}><span className={styles.trello}><FaTrello/></span> Trello </h2>
            </div>
            </div>
            </div> 
        <div className={styles.github}>
            <a className={styles.codigo} href="https://github.com/ramirofazio/RestoBook"><span className={styles.iconogit}><BsGithub/></span>Codigo de RestoBook</a>
        </div>
        </div>
        </div>
    )
}