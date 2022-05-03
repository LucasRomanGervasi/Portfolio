import React from "react";
import Nav from "./Nav";
import perfil from "../img/Perfil5.png"
import styles from "./Home.module.css"
import { FiDownload } from "react-icons/fi";
import {useSelector} from "react-redux"

export default function Home(){
    return(
        <div className={styles.home}>
            <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.wrapper}>
                <h2 className={styles.titulo1}>Hola, soy</h2>
                <div className={styles.parrafo}>
                 <h1 className={styles.titulo}> LUCAS ROMAN GERVASI </h1>
                 {/* <h2 className={styles.titulo2}> Tengo 20 años, soy Argentino y Desarrollador Web Front End</h2> */}
                </div>
                 <div className={styles.wrapper1}>
                    <a  className={styles.a} href='https://drive.google.com/file/d/1UQANF-LJEhHSllj2nB8Y7p94iCdpALbe/view?usp=sharing'>DESCARGAR CV </a>
                    {/* <span className={styles.cv}> <FiDownload/></span> */}
                    </div>
                </div>
                </div>
            <div className={styles.right}>
            <div className={styles.imagenContainer}>
            <img 
            className={styles.foto}
            src={perfil}/>
            </div>
            </div>
            </div>
            <div className={styles.scrollcontainer}>
            <div className={styles.scrollIcon}>
                <div className={styles.bola}></div>
            </div>
            </div>
            </div>
    )
    }