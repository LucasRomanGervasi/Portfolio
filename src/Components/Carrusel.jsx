import React from "react"
import henry from "../img/Henry.png"
import utn from "../img/utn.png"
import canto from "../img/Canto.png"
import styles from "./Carrusel.module.css"

export default function Carrusel(){
    return(
    <div className={styles.container}>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators" >
    <li data-target="#carouselExampleIndicators"  data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
<div class="carousel-item active">
  <a className={styles.henry}  href='https://drive.google.com/file/d/16To-Pgg3hJWvYd9hin2BUSqO9W8-zp6A/view'> 
  <h1 className={styles.titulo1}>Bachiller en Economia y Administración</h1>
  <img  className={styles.img}  src={canto} alt="First slide"/>
  <h1 className={styles.titulo1}>Instituto Canto a la Vida (2015 - 2019)</h1>
    </a>
</div>
<div class="carousel-item">
    <a className={styles.henry}  href='https://drive.google.com/file/d/1nmEq_ekuL17XYCzQunq1KsAF8INiA90r/view'> 
        <h1 className={styles.titulo1}> Desarrollo Web HTML CSS JavaScript  </h1>
  <img className={styles.img} src={utn} alt="Second slide"/>
  <h1 className={styles.titulo1}>UTN (Feb 2021-May 2021)</h1>
  </a>
</div>
 <div class="carousel-item">
 <a className={styles.henry}  href='https://drive.google.com/file/d/1DY3QEisWmsX-eVm4i7fcs8Oax1zG8807/view'> 
        <h1 className={styles.titulo1}> Full Stack Web Developer </h1>
  <img className={styles.img} src={henry} alt="Third First slide"/>
  <h1 className={styles.titulo1}>Henry Bootcamp (Ago 2021-Dic 2021)</h1>
        </a>
</div>
</div>
</div>
  </div>
    )
}
