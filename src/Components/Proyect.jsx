import React from "react"
import styles from "./Proyect.module.css"
import foodApp from "../img/foodApp.png"
import restoBook from "../img/restoBook.png"

export default function Proyect(){
    return(
      <div className={styles.proyectos} >
        <h2 className={styles.titulo} >PROYECTOS</h2>
      <div className={styles.container1}>
        <div className={styles.containerFood}>
        <div className={styles.foodAppFront}>
          <h1 className={styles.titulo1}>Today's Menu</h1>
          <img
          className={styles.foodImg}
          src={foodApp}
          >
          </img>
          <a className={styles.boton} href="/TodaysMenu">Ver más</a>
        </div>
        </div>
        <div className={styles.containerFood}>
        <div className={styles.foodAppFront}>
          <h1 className={styles.titulo1}>Resto Book</h1>
          <img
          className={styles.foodImg}
          src={restoBook}
          >
          </img>
             <a className={styles.boton} href="/RestoBook">Ver más</a>
        </div>
        </div>
        <div className={styles.containerfin}>
          <div className={styles.fin}>
          </div>
            </div>
          </div>
          </div>
    )
}