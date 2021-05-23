import React, {  useCallback, useState } from 'react'
import SelectZonaHoraria from './SelectZonaHoraria'

import {auth,db} from './../../Firebase'
import { useHistory } from 'react-router'

function FormularioRegistro({login,setlogin}) {
    const [errorContraseña, seterrorContraseña] = useState(null)
    const [errorCorreo, seterrorCorreo] = useState(null)
    const [correo, setcorreo] = useState("")
    const [contra, setcontra] = useState("")
    const [contra2, setcontra2] = useState("")
    const [zonahoraria, setzonahoraria] = useState("Bogota")
    const history= useHistory()
    const [error, seterror] = useState(null)
    
    const procesarDatos=async(e)=>{
        let todobien = true ;
        e.preventDefault()
        seterrorContraseña(null)
        seterrorCorreo(null)

        if(!correo.trim()){
            seterrorCorreo("Correo en blanco")
            todobien=false
        }
        if(!contra.trim()||!contra2.trim()){
            seterrorContraseña("Contraseña vacia")
            todobien=false
        }
        if(contra!==contra2){
            seterrorContraseña("Las contraseñas no coiciden")
            todobien=false
        }
        if(!contra.length>6){
            seterrorContraseña("La contraseña debe tener mas de 6 caracteres")
            todobien=false
        }

        if(todobien){
            registrar()
            
        }
    }

    const registrar=useCallback(
        async()=>{
            try {
               const res= await auth.createUserWithEmailAndPassword(correo,contra)
                await db.collection("usuarios").doc(res.user.email).set({
                    email:res.user.email,
                    uid:res.user.uid,
                    zonaHorario:zonahoraria
                }) 
                console.log("informacion","usuario"+correo+"contraseña"+contra)

                 console.log(res.user) 
                history.push("/dashboard")
            } catch (error) {
                console.log(error)
                seterror(error.message)
            }
        }
    ,[correo,contra,history,zonahoraria])



    return (
        <form onSubmit={procesarDatos} >
             {
                error&&(
                <div class="alert alert-danger" role="alert">
                    {error}
                </div>  )
            }

            <div>
                <div className="form-floating mb-3 ">
                    <input 
                    type="email"
                    className={`form-control ${errorCorreo && "is-invalid"}`}  
                    placeholder="name@example.com"
                    value={correo}
                    onChange={(e)=>{setcorreo(e.target.value)}}
                    />
                    <label >Email address</label>
                    {
                        errorCorreo && (<div className="invalid-feedback">
                            {errorCorreo}
                        </div>)
                    }

                </div>
                <SelectZonaHoraria zonaHorario={zonahoraria}  setzonahoraria={setzonahoraria}/>

                <div className="form-floating mb-3">
                    <input 
                    type="password"  
                    className={`form-control ${errorContraseña && "is-invalid"}`}  
                    placeholder="name@example.com" 
                    value={contra}
                    onChange={(e)=>{setcontra(e.target.value)}}
                    />
                    <label >Password</label>
                    {
                        errorContraseña && (<div className="invalid-feedback">
                            {errorContraseña}
                        </div>)
                    }
                </div>
                <div className="form-floating mb-3">
                    <input 
                    type="password" 
                    className="form-control"  
                    placeholder="name@example.com"
                    value={contra2}
                    onChange={(e)=>{setcontra2( e.target.value)}} />
                    <label >Repeat password</label>
                </div>

            </div>

            <div className="contendores_botones">
                <button className="botones_pagina botones_formulario" type="submit" >Sing Up</button>
                <button className="botones_pagina botones_formulario segundario" type="button" onClick={() => { setlogin(!login) }} >Login</button>

            </div>
        </form>
    )
}

export default FormularioRegistro
