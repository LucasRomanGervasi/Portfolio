import React, { useState } from "react";
import Nav from "./Nav";
import emailjs from '@emailjs/browser';
import styles from "./Contacts.module.css"
import{ init } from '@emailjs/browser';
import {  BsGithub, BsWhatsapp } from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {GiSmartphone} from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import {IoLocationSharp} from "react-icons/io5"
init("8pGs4U6nn-mwMRBjk");
const Result = () => {
    return(
        <p className={styles.mensaje}>
            Tu mensaje fue enviado, muchas gracias!
        </p>
    )
}

export default function Contacts(){
    const [result, showResult] = useState(false)

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_lhmycj9', 'template_m3yg8gt', event.target, '8pGs4U6nn-mwMRBjk')
          .then((result) => {
              console.log(result);
          }, (error) => {
              console.log(error);
          });
          event.target.reset()
          showResult(true)
        };
        setTimeout(() => {
            showResult(false)
        }, 5000)

      return (
        <div>
          <div className={styles.container}>
            <h2 className={styles.titulo}>CONTACTO</h2>
            <div className={styles.right}>
            <div className={styles.formulario}> 
            <h1 className={styles.titulo1}> ¡Me encantaría saber de vos! Enviame un mensaje en el formulario </h1>
            <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={sendEmail}>
                <label>Nombre</label>
                <br/>
                <input className={styles.input} type="text" autoComplete="off" placeholder="Lucas" name="fullName" required/>
                <br/>
                <label>Email</label>
                <br />
                <input className={styles.input} type="text" autoComplete="off" placeholder="example@hotmail.com" name="email" required/>
                <br/>
                <label>Numero</label>
                <br />
                <input className={styles.input} type="text" autoComplete="off" placeholder="+54 9 11 6802 0511" name="phone" required/>
                <br/>
                <span>Mensaje</span>
                <br />
                <textarea className={styles.textarea} autoComplete="off"  placeholder="Escribí tu mensaje" name="message" required />
                <br />
                <div className={styles.buttondiv} > 
                <button className={styles.button}> Enviar </button>
                </div>
                </form>
            </div>
                <div className={styles.mensajecontainer}>
                    {result ? <Result /> : null}
                </div>
            </div>
            </div> 
        </div>
          <div className={styles.left}>
          <div className={styles.contactospersonales}>
            <div className={styles.contactos}>
                <h2 className={styles.a}> <span className={styles.icon}><GiSmartphone/></span> +54 9 11 6802 0511  </h2>
                <h2 className={styles.a}> <span className={styles.icon}><HiOutlineMail/></span> gervasilucas22@gmail.com  </h2>
                <h2 className={styles.a}> <span className={styles.icon}><IoLocationSharp/></span> Buenos Aires, Argentina </h2>
            </div>
            <div className={styles.redes}>
            <a className={styles.a2} href="https://api.whatsapp.com/send?phone=+5491168020511&amp;text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20work!">
            <span className={styles.wpp}><BsWhatsapp/></span></a>
                <a  className={styles.a2} href='https://github.com/LucasRomanGervasi'> <span className={styles.github}><BsGithub/></span> </a>
                <a  className={styles.a2} href='https://www.linkedin.com/in/lucas-roman-gervasi-419463200/'> <span className={styles.linkedin}><FaLinkedinIn/></span> </a>
                <a  className={styles.a2} href='https://www.instagram.com/lucasgervasi_/'> <span className={styles.instagram}><FaInstagram/></span> </a>
            </div>
            <div className={styles.derechoscontainer}>
                <h1 className={styles.derechos}> © 2022 Lucas Román Gervasi </h1>
            </div>
            </div>
            </div>
        </div>
      );
    }
                 