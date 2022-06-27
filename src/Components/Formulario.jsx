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
    function validateNumero(input){
        let errorsNumero={}
        if(input.phone === ""){
            errorsNumero= ""
        }
        else if( expresiones.telefono.test(input.phone) ){
            errorsNumero.phone ="siphone"
        }
        else if( !expresiones.telefono.test(input.phone)){
            errorsNumero.phone ="nophone"
        }
        return errorsNumero
    }
    function validate(input){
        let errors = {};
        if( !expresiones.nombre.test(input.fullName) || !input.fullName ) {
            errors.fullName = "nonombre"
        }
         if( expresiones.nombre.test(input.fullName)){
            errors.fullName ="sinombre"
        }
        if( !expresiones.nombre.test(input.last) || !input.last ) {
            errors.last = "noapellido"
        }
         if( expresiones.nombre.test(input.last)){
            errors.last ="siapellido"
        }
         if( !expresiones.correo.test(input.email)  || !input.email) {
            errors.email = "noemail"
        }
         if ( expresiones.correo.test(input.email)) {
            errors.email = "siemail"
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
        const [errorsNumero, setErrorsNumero] = useState("");
        const [errors, setErrors] = useState({});
        const [input, setInput] = useState({
            fullName:"",
            last:"",
            email:"",
            phone:"",
            message:""
    })
    console.log( expresiones.telefono.test(input.phone) ? true : false )
    console.log(input.phone)
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
         setErrors(validate({
             ...input,
             [e.target.name]: e.target.value
         }))
         setErrorsNumero(validateNumero({
            ...input,
            [e.target.name]: e.target.value
        }))
        }
    const sendEmail = (event) => {
        event.preventDefault();
        if(errors.email === "noemail" || errors.fullName === "nonombre" || errorsNumero.phone === "nophone" || errors.last === "noapellido"  || errors.message === "nomensaje" ){
        }
        else if(errors.email === "" || errors.fullName === ""  || errors.apellido === "" || errors.message === ""  ){
            setErrors({
                fullName: "nonombre",
                last:"noapellido",
                email:"noemail",
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
                last:"",
                email:"",
                phone:"",
                message:""
            })
            setErrors({
                fullName:"",
                last:"",
                email:"",
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
    <div className={styles.nombreyapellido}> 
    <div className={styles.nombre}>
    <label className={styles.titulomensaje}>Nombre *</label>
    <br/>
    <div className={styles.union}>
    <input className={ errors.fullName === "nonombre" ? styles.inputError : styles.input} type="text"  placeholder="Lucas" name="fullName" value={input.fullName} onChange={(e) => handleChange(e)} /> 
    <span className={styles.iconMal}>{errors.fullName === "nonombre" ? <FaTimesCircle/> : null }</span>
    <span className={styles.iconBien}>{errors.fullName === "sinombre" ? <FaRegCheckCircle/> : null }</span>
    </div>
    {errors.fullName === "nonombre"?     
                             <p className={styles.errors}>Debes ingresar un nombre valido, mayor a 2 letras y no puede contener números  </p>
                             : <p className={styles.errors2}></p>}
    </div>
    <br/>
    <div className={styles.apellido}>
    <label className={styles.titulomensaje}>Apellido *</label>
    <br/>
    <div className={styles.union}>
    <input className={ errors.last === "noapellido" ? styles.inputError : styles.input} type="text"  placeholder="Gervasi" name="last" value={input.last} onChange={(e) => handleChange(e)} /> 
    <span className={styles.iconMal}>{errors.last === "noapellido" ? <FaTimesCircle/> : null }</span>
    <span className={styles.iconBien}>{errors.last === "siapellido" ? <FaRegCheckCircle/> : null }</span>
    </div>
    {errors.last === "noapellido"?     
                             <p className={styles.errors}>Debes ingresar un nombre valido, mayor a 2 letras y no puede contener números  </p>
                             : <p className={styles.errors2}></p>}
    <br/>
    </div>
    </div>
    <div className={styles.nombreyapellido}> 
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
    <label className={styles.titulomensaje}>Número de contacto </label>
    <br/>
    <div className={styles.union}>
    <input className={ errorsNumero.phone === "nophone" ? styles.inputError : styles.input}type="text"  placeholder="1168020511" name="phone" value={input.phone} onChange={(e) => handleChange(e)}/>
    <span className={styles.iconMal}>{errorsNumero.phone === "nophone" ? <FaTimesCircle/> : null }</span>
    <span className={styles.iconBien}>{errorsNumero.phone === "siphone" ? <FaRegCheckCircle/> : null }</span>
    </div>
    {errorsNumero.phone === "nophone" ?     
                             <p className={styles.errors}>Debes ingresar un telefono valido, que contenga entre 7 a 14 números </p>
                             : <p className={styles.errors2}></p>}
    </div>
    <div className={styles.mensajecontainer}>
    <br/>
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
      numberOfPieces={800}
      tweenDuration={3000}
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