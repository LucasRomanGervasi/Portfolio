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
        </div>
        <div className={styles.foodAppBack}>
        <h1 className={styles.titulo2}>¿De que se trata?</h1>
            <p className={styles.parrafo2}>
            Es una Single Page Application (SPA) de recetas de cocina. Te permite ver todas las recetas traídas de la API
            <a className={styles.spoo} href="https://spoonacular.com/food-api"> spoonacular.com</a>, ordenarlas, filtrarlas y buscarlas por nombre o por el paginado. 
            Además de poder crear tus propias recetas.</p>
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
        </div>
        <div className={styles.foodAppBack}>
        <h1 className={styles.titulo2}>¿De que se trata?</h1>
            <p className={styles.parrafo2}>Con un grupo de 7 compañeros, desarrollamos una app movil llamada Resto Book. La idea de la app es resolver el problema 
            de tiempo para decidir donde ir a cenar.
             Como Usuario podes buscar la empresa que vos quieras, ordenarlas, filtrarlas, ver la carta y 
             hacer una reserva en el mismo a traves de Mercado Pago. Como empresa podes adminstrarla modificando el horario de reserva, 
             el precio, agregar o eliminar comidas, y tambien ver sus estadisticas.</p>
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