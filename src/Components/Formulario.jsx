import React, { useState } from "react";
import styles from "./Formulario.module.css"
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import { FaTimesCircle, FaRegCheckCircle, FaLastfmSquare } from "react-icons/fa";
init("8pGs4U6nn-mwMRBjk");
const Result = () => {
        return(
            <p className={styles.mensaje}>
            Tu mensaje fue enviado, muchas gracias!
       </p>
    )
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
        if ( !input.mensaje){
            errors.mensaje = "nomensaje"
        }
        if (input.mensaje){
            errors.mensaje = "simensaje"
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
            mensaje:""
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
        if(errors.email === "noemail" || errors.fullName === "nonombre"  || errors.phone === "nophone"  || errors.mensaje === "nomensaje" ){
            console.log("nonon")
        }
        else if(errors.email === "" || errors.fullName === "" || errors.phone === "" || errors.mensaje === "" ){
            setErrors({
                fullName: "nonombre",
                email:"noemail",
                phone:"nophone",
                mensaje:"nomensaje"
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
                mensaje:""
            })
            setErrors({
                fullName:"",
                email:"",
                phone:"",
                mensaje:""
            })
        } 
        };
    setTimeout(() => {
        showResult(false)
    }, 5000)
return(
    <div className={styles.right}>
    <div className={styles.formulario}> 
    <h1 className={styles.titulo1}> ¡Me encantaría saber de vos! Enviame un mensaje en el formulario </h1>
<div className={styles.wrapper}>
<form className={styles.form} onSubmit={sendEmail}>
    <div className={styles.nombre}>
    <label>Nombre</label>
    <br/>
    <input className={ errors.fullName === "nonombre" ? styles.inputError : styles.input} type="text"  placeholder="Lucas Gervasi" name="fullName" value={input.fullName} onChange={(e) => handleChange(e)} /> 
    <span className={styles.iconMal}>{errors.fullName === "nonombre" ? <FaTimesCircle/> : null }</span>
    <span className={styles.iconBien}>{errors.fullName === "sinombre" ? <FaRegCheckCircle/> : null }</span>
    {errors.fullName === "nonombre"?     
                             <p className={styles.errors}>Debes ingresar un nombre valido, mayor a 2 letras y no puede contener números  </p>
                             : <p className={styles.errors2}></p>}
    </div>
    <br/>
    <div className={styles.email}>
    <label>Email</label>
    <br/>
    <input className={ errors.email === "noemail" ? styles.inputError : styles.input}  type="text"  placeholder="example@hotmail.com" name="email" value={input.email} onChange={(e) => handleChange(e)}/>
    <span className={styles.iconMal}>{errors.email === "noemail" ? <FaTimesCircle/> : null }</span>
    <span className={styles.iconBien}>{errors.email === "siemail" ? <FaRegCheckCircle/> : null }</span>
    {errors.email === "noemail" ?     
                             <p className={styles.errors}>Debes ingresar un email valido </p>
                             : <p className={styles.errors2}></p>}
    </div>
    <br/>
    <div className={styles.numero}>
    <label>Numero</label>
    <br/>
    <input className={ errors.phone === "nophone" ? styles.inputError : styles.input}type="text"  placeholder="+54 9 11 6802 0511" name="phone" value={input.phone} onChange={(e) => handleChange(e)}/>
    <span className={styles.iconMal}>{errors.phone === "nophone" ? <FaTimesCircle/> : null }</span>
    <span className={styles.iconBien}>{errors.phone === "siphone" ? <FaRegCheckCircle/> : null }</span>
    {errors.phone === "nophone" ?     
                             <p className={styles.errors}>Debes ingresar un telefono valido, que contenga entre 7 a 14 números </p>
                             : <p className={styles.errors2}></p>}
    </div>
    <br/>
    <div className={styles.mensajecontainer}>
    <label className={styles.titulomensaje}>Mensaje</label>
    <br/>
    <textarea className={ errors.mensaje === "nomensaje" ? styles.textareaError : styles.textarea} placeholder="Escribí tu mensaje" name="mensaje" value={input.mensaje} onChange={(e) => handleChange(e)} />
    <span className={styles.iconMal}>{errors.mensaje === "nomensaje" ? <FaTimesCircle/> : null }</span>
    <span className={styles.iconBien}>{errors.mensaje === "simensaje" ? <FaRegCheckCircle/> : null }</span>
    {errors.mensaje === "nomensaje" ?     
                             <p className={styles.errorsMen}>Debes ingresar un mensaje </p>
                             : <p className={styles.errors2}></p>}
    </div>
    <div className={styles.buttondiv} > 
    <button className={styles.button}> Enviar </button>
    </div>
    <div className={styles.mensajecontainer}>
        {result === true ? <Result /> : null}
    </div>
    </form>
</div>
</div>
</div> 
    )
}