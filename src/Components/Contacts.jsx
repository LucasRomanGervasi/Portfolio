import React from "react";
import styles from "./Contacts.module.css";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import Formulario from "./Formulario";

export default function Contacts() {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div>
      <div className={darkMode ? styles.container2 : styles.container}>
        <h2 className={styles.titulo}>CONTACTO</h2>
      </div>
      <div className={styles.formulario}>
        <Formulario />
      </div>
      <div className={styles.left}>
        <div className={styles.contactospersonales}>
          <div className={styles.contactos}>
            <h2 className={styles.a}>
              {" "}
              <span className={styles.icon}>
                <GiSmartphone />
              </span>{" "}
              +54 9 11 6802 0511{" "}
            </h2>
            <h2 className={styles.a}>
              {" "}
              <span className={styles.icon}>
                <HiOutlineMail />
              </span>{" "}
              gervasilucas22@gmail.com{" "}
            </h2>
            <h2 className={styles.a}>
              {" "}
              <span className={styles.icon}>
                <IoLocationSharp />
              </span>{" "}
              Buenos Aires, Argentina{" "}
            </h2>
          </div>
          <div className={styles.redes}>
            <a
              className={styles.a2}
              href="https://api.whatsapp.com/send?phone=+5491168020511&amp;text=Hola%20Lucas,%20me%20gustaría%20saber%20más%20sobre%20tu%20trabajo!"
            >
              <span className={styles.wpp}>
                <BsWhatsapp />
              </span>
            </a>
            <a
              className={styles.a2}
              href="https://github.com/LucasRomanGervasi"
            >
              {" "}
              <span className={styles.github}>
                <BsGithub />
              </span>{" "}
            </a>
            <a
              className={styles.a2}
              href="https://www.linkedin.com/in/lucas-roman-gervasi-419463200/"
            >
              {" "}
              <span className={styles.linkedin}>
                <FaLinkedinIn />
              </span>{" "}
            </a>
            <a
              className={styles.a2}
              href="https://www.instagram.com/lucasgervasi_/"
            >
              {" "}
              <span className={styles.instagram}>
                <FaInstagram />
              </span>{" "}
            </a>
          </div>
          <div className={styles.derechoscontainer}>
            <h1 className={styles.derechos}> © 2022 Lucas Román Gervasi </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
