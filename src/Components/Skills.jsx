import React from "react";
import styles from "./Skills.module.css";
import { DiNodejsSmall, DiGit, DiHtml5, DiCss3, DiReact} from "react-icons/di";
import { SiRedux, SiFirebase,SiPostgresql, SiJavascript } from "react-icons/si";
import { FaTrello } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Skills(){
    const darkMode = useSelector(state => state.darkMode)
    return(
                <div className={styles.abajo}>
         <h2 className={styles.titulo2}> HABILIDADES</h2>
             <div className={styles.skills}>
        <div className={styles.container}>
            <div className={ darkMode? styles.frontend : styles.frontend2}> 
            <h1 className={styles.titulo1}>FRONT END</h1>
            <h2 className={styles.tecnologias}> <span className={styles.react}><DiReact/></span> React </h2>
            <h2 className={styles.tecnologias}> <span className={styles.react}><DiReact/></span> React Native </h2>
            <h2 className={styles.tecnologias}> <span className={styles.redux}><SiRedux/></span> Redux </h2>
            <h2 className={styles.tecnologias}> <span className={styles.html}><DiHtml5/></span> HTML </h2>
            <h2 className={styles.tecnologias}> <span className={styles.css}><DiCss3/></span> CSS </h2>
            </div>
            <div className={darkMode? styles.backend: styles.backend2}>
            <h1 className={ styles.titulo1}>BACK END</h1>
            <h2 className={styles.tecnologias}> <span className={styles.js}><DiNodejsSmall/></span> Node.js</h2>
            <h2 className={styles.tecnologias}> <span className={styles.js}><DiNodejsSmall/></span> Express</h2>
            <h2 className={styles.tecnologias}> <span className={styles.firebase}><SiFirebase/></span> Firebase </h2>
            <h2 className={styles.tecnologias}> <span className={styles.sql}><SiPostgresql/></span> Postgre SQL </h2>
            </div>
            <div className={darkMode? styles.lenguajes: styles.lenguajes2}>
            <h1 className={styles.titulo1}>LENGUAJES</h1>
            <h2 className={styles.tecnologias}> <span className={styles.javascript}><SiJavascript/></span> Javascript </h2>
            </div>
            <div className={darkMode? styles.otros: styles.otros2}>
            <h1 className={styles.titulo1}>OTRAS</h1>
            <h2 className={styles.tecnologias}> <span className={styles.git}><DiGit/></span>GIT </h2>
            <h2 className={styles.tecnologias}><span className={styles.trello}><FaTrello/></span> Trello </h2>
            <h2 className={styles.tecnologias}>    Metodología AGILE SCRUM </h2>
            </div>
        </div>
         <div className={styles.containerfin}>
           <div className={darkMode ? styles.fin2 : styles.fin}>
           </div>
        </div> 
             </div>
         </div>
    )
}