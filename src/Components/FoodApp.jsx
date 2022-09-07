import React from "react";
import styles from "./FoodApp.module.css";
import { FiArrowLeftCircle } from "react-icons/fi";
import foodApp from "../img/foodApp.png";
import foodApp2 from "../img/foodApp2.png";
import foodApp3 from "../img/foodApp3.png";
import foodApp4 from "../img/foodApp4.png";
import { DiNodejsSmall, DiGit, DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { SiRedux, SiPostgresql, SiJavascript } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

export default function FoodApp() {
  return (
    <div className={styles.FoodApp}>
      <div className={styles.container}>
        <div className={styles.boton}>
          <a className={styles.flecha} href="/#proyect">
            <FiArrowLeftCircle />
          </a>
        </div>
        <div className={styles.wrapper}>
          <h2 className={styles.titulo}> TODAY'S MENU</h2>
          <h1 className={styles.descripcion}>DESCRIPCIÓN</h1>
          <div className={styles.parrafo}>
            <p className={styles.parrafo2}>
              Es una Single Page Application (SPA) de recetas de cocina. Te
              permite ver todas las recetas traídas de la API
              <a
                className={styles.spoo}
                href="https://spoonacular.com/food-api"
              >
                {" "}
                spoonacular.com
              </a>
              , ordenarlas, filtrarlas y buscarlas por nombre o por el paginado.
              Además de poder crear tus propias recetas.
            </p>
          </div>
        </div>
        <div className={styles.imgFoodApp}>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className={styles.imgcontainer}>
                  <img
                    className={styles.img}
                    src={foodApp3}
                    alt="First slide"
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className={styles.imgcontainer}>
                  <img
                    className={styles.img}
                    src={foodApp}
                    alt="Second slide"
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className={styles.imgcontainer}>
                  <img
                    className={styles.img}
                    src={foodApp2}
                    alt="Third slide"
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className={styles.imgcontainer}>
                  <img className={styles.img} src={foodApp4} alt="Four slide" />
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className={styles.wrapper2}>
          <h1 className={styles.titulo1}>TECNOLOGÍAS</h1>
          <div className={styles.tecnologiascontainer}>
            <div className={styles.tecnologiascontainer2}>
              {" "}
              <h1 className={styles.titulo2}>FRONT END</h1>
              <h2 className={styles.tecnologias}>
                {" "}
                <span className={styles.react}>
                  <DiReact />
                </span>{" "}
                React{" "}
              </h2>
              <h2 className={styles.tecnologias}>
                {" "}
                <span className={styles.redux}>
                  <SiRedux />
                </span>{" "}
                Redux{" "}
              </h2>
              <h2 className={styles.tecnologias}>
                {" "}
                <span className={styles.html}>
                  <DiHtml5 />
                </span>{" "}
                HTML{" "}
              </h2>
              <h2 className={styles.tecnologias}>
                {" "}
                <span className={styles.css}>
                  <DiCss3 />
                </span>{" "}
                CSS{" "}
              </h2>
            </div>
            <div className={styles.tecnologiascontainer2}>
              {" "}
              <h1 className={styles.titulo2}>BACK END</h1>
              <h2 className={styles.tecnologias}>
                {" "}
                <span className={styles.js}>
                  <DiNodejsSmall />
                </span>{" "}
                Node.js
              </h2>
              <h2 className={styles.tecnologias}>
                {" "}
                <span className={styles.js}>
                  <DiNodejsSmall />
                </span>{" "}
                Express
              </h2>
              <h2 className={styles.tecnologias}>
                {" "}
                <span className={styles.sql}>
                  <SiPostgresql />
                </span>{" "}
                Postgre SQL{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.github}>
          <a
            className={styles.codigo}
            href="https://github.com/LucasRomanGervasi/Today-s-Menu"
          >
            {" "}
            <span className={styles.iconogit}>
              <BsGithub />
            </span>
            Codigo de Today's Menu
          </a>
        </div>
      </div>
    </div>
  );
}
