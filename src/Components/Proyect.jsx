import React from "react"
import styles from "./Proyect.module.css"
import foodApp from "../img/foodApp.png"
import {useSelector} from "react-redux"
import restoBook from "../img/restoBook.png"

export default function Proyect(){
  const darkMode = useSelector(state => state.darkMode)
    return(
      <div id="proyect" className={styles.proyectos} >
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(124, 153, 252)" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,101.3C384,128,480,192,576,186.7C672,181,768,107,864,85.3C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path></svg>
             */}
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
         <div className={styles.containerfin} >
          <div className={ darkMode ? styles.fin2 : styles.fin}>
          </div> 
            </div>
          </div>
          </div>
    )
}