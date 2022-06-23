import React, { useState } from "react";
import styles from "./Formulario.module.css"
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import { FaTimesCircle, FaRegCheckCircle, FaLastfmSquare } from "react-icons/fa";
import Confetti from 'react-confetti'
init("8pGs4U6nn-mwMRBjk");
const Result = () => {
    // if(result === "enviado"){
        return(
            <h1 className={styles.mensaje}>
            Tu mensaje fue enviado con éxito, muchas gracias!
            </h1>
        )
            // }else{
            //     return(
            //         <p className={styles.mensajeNo}>
            //             Algo salio mal, es necesario que completes todos los datos!
            //    </p>
            //     )
            // }
}


  // Validacion
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }
    function validate(input){
        let errors = {};
        if( !expresiones.nombre.test(input.fullName) || !input.fullName ) {
            errors.fullName = "nonombre"
        }
         if( expresiones.nombre.test(input.fullName)){
            errors.fullName ="sinombre"
        }
         if( !expresiones.correo.test(input.email)  || !input.email) {
            errors.email = "noemail"
        }
         if ( expresiones.correo.test(input.email)) {
            errors.email = "siemail"
        }
         if( !expresiones.telefono.test(input.phone)  || !input.phone) {
            errors.phone = "nophone"
        }
         if ( expresiones.telefono.test(input.phone)) {
            errors.phone = "siphone"
        }
        if ( !input.message){
            errors.message = "nomensaje"
        }
        if (input.message){
            errors.message = "simensaje"
        }
        return errors;
    }
    export default function Formulario(){
        const [result, showResult] = useState(false);
        const [errors, setErrors] = useState({});
        const [input, setInput] = useState({
            fullName:"",
            email:"",
            phone:"",
            message:""
    })
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
         setErrors(validate({
             ...input,
             [e.target.name]: e.target.value
         }))
        }
    const sendEmail = (event) => {
        event.preventDefault();
        if(errors.email === "noemail" || errors.fullName === "nonombre"  || errors.phone === "nophone"  || errors.message === "nomensaje" ){
        }
        else if(errors.email === "" || errors.fullName === "" || errors.phone === "" || errors.message === "" ){
            setErrors({
                fullName: "nonombre",
                email:"noemail",
                phone:"nophone",
                message:"nomensaje"
            })
        }
            else{
            emailjs.sendForm('service_lhmycj9', 'template_m3yg8gt', event.target, '8pGs4U6nn-mwMRBjk')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
            event.target.reset()
            showResult(true)
            setInput({
                fullName:"",
                email:"",
                phone:"",
                message:""
            })
            setErrors({
                fullName:"",
                email:"",
                phone:"",
                message:""
            })
        } 
        setTimeout(function(){
            showResult(false)
        }, 10000)
        }
    return(
        <div className={styles.right}>
    <div className={styles.formulario}> 
    <h1 className={styles.titulo1}> ¡Me encantaría saber de vos! Enviame un mensaje en el formulario </h1>
<div className={styles.wrapper}>
<form className={styles.form} onSubmit={sendEmail}>
    <div className={styles.nombre}>
    <label className={styles.titulomensaje}>Nombre *</label>
    <br/>
    <div className={styles.union}>
    <input className={ errors.fullName === "nonombre" ? styles.inputError : styles.input} type="text"  placeholder="Lucas Gervasi" name="fullName" value={input.fullName} onChange={(e) => handleChange(e)} /> 
    <span className={styles.iconMal}>{errors.fullName === "nonombre" ? <FaTimesCircle/> : null }</span>
    <span className={styles.iconBien}>{errors.fullName === "sinombre" ? <FaRegCheckCircle/> : null }</span>
    </div>
    {errors.fullName === "nonombre"?     
                             <p className={styles.errors}>Debes ingresar un nombre valido, mayor a 2 letras y no puede contener números  </p>
                             : <p className={styles.errors2}></p>}
    </div>
    <br/>
    <div className={styles.email}>
    <label className={styles.titulomensaje}>Email *</label>
    <br/>
    <div className={styles.union}>
    <input className={ errors.email === "noemail" ? styles.inputError : styles.input}  type="text"  placeholder="example@hotmail.com" name="email" value={input.email} onChange={(e) => handleChange(e)}/>
    <span className={styles.iconMal}>{errors.email === "noemail" ? <FaTimesCircle/> : null }</span>
    <span className={styles.iconBien}>{errors.email === "siemail" ? <FaRegCheckCircle/> : null }</span>
    </div>
    {errors.email === "noemail" ?     
                             <p className={styles.errors}>Debes ingresar un email valido </p>
                             : <p className={styles.errors2}></p>}
    </div>
    <br/>
    <div className={styles.numero}>
    <label className={styles.titulomensaje}>Número de contacto *</label>
    <br/>
    <div className={styles.union}>
    <input className={ errors.phone === "nophone" ? styles.inputError : styles.input}type="text"  placeholder="1168020511" name="phone" value={input.phone} onChange={(e) => handleChange(e)}/>
    <span className={styles.iconMal}>{errors.phone === "nophone" ? <FaTimesCircle/> : null }</span>
    <span className={styles.iconBien}>{errors.phone === "siphone" ? <FaRegCheckCircle/> : null }</span>
    </div>
    {errors.phone === "nophone" ?     
                             <p className={styles.errors}>Debes ingresar un telefono valido, que contenga entre 7 a 14 números </p>
                             : <p className={styles.errors2}></p>}
    </div>
    <br/>
    <div className={styles.mensajecontainer}>
    <label className={styles.titulomensaje}>Mensaje *</label>
    <br/>
    <div className={styles.union}>
    <textarea className={ errors.message === "nomensaje" ? styles.textareaError : styles.textarea} placeholder="Escribí tu mensaje" name="message" value={input.message} onChange={(e) => handleChange(e)} />
    <span className={styles.iconMal}>{errors.message === "nomensaje" ? <FaTimesCircle/> : null }</span>
    <span className={styles.iconBien}>{errors.message === "simensaje" ? <FaRegCheckCircle/> : null }</span>
    </div>
    {errors.message === "nomensaje" ?     
                             <p className={styles.errorsMen}>Debes ingresar un mensaje </p>
                             : <p className={styles.errors2}></p>}
    </div>
    <div className={styles.buttondiv} > 
    <button className={styles.button}> Enviar </button>
    </div>
     {result === true ?
    <div className={styles.mensajeConfirmacion}>
         <div className={styles.confeti}>
        <Confetti
      width={2000}
      height={2000}
      numberOfPieces={400}
      tweenDuration={1000}
      />
      </div>
       <Result /> 
    </div>
     : null}
     {/* {result === "noenviado" ?
    <div className={styles.mensajeNoConfirmacion}>
       <Result/> 
       </div>
     : null} */}
    </form>
</div>
</div>
</div> 
    )
}