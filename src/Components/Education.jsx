import React from "react";
import styles from "./Education.module.css"
import henry from "../img/Henry.png"
import utn from "../img/utn.png"
import canto from "../img/Canto.png"
import Carrusel from "./Carrusel.jsx"

export default function Education(){
    return(
        <div className={styles.container}>
            <div className={styles.carrusel}>
             <Carrusel/>
            </div>
            <div className={styles.fin}>
            </div> 
        </div>
    )
} 