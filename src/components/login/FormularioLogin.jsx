import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import {auth} from './../../Firebase'

function FormularioLogin({ setlogin, login }) {
    const [error, seterror] = useState(null)
    const [correo, setcorreo] = useState("")
    const history= useHistory()
    const [contraseña, setcontraseña] = useState("")
    const to_login = (e) => {
        let loguear= true;
        seterror(null)
        e.preventDefault()
        if(!correo.trim()){
            loguear=false
            seterror("Correo vacio")
        }

        if(!contraseña.trim()){
            loguear=false
            seterror("contraseña vacia")
        }
        if(loguear){
            validadLogin()
        }

    }

    const validadLogin=useCallback(async()=>{
        try {
           await auth.signInWithEmailAndPassword(correo,contraseña)
           history.push("/dashboard")

        } catch (error) {
                seterror(error.message)
        }
    },[correo,contraseña,history])
    return (

        <form  onSubmit={to_login}  >
            {
                error&&(
                <div class="alert alert-danger" role="alert">
                    {error}
                </div>  )
            }
            <div>
                <div className="form-floating mb-3">
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="name@example.com"
                    value={correo}
                    onChange={(e)=>{setcorreo(e.target.value)}}  />
                    <label for="floatingInput">Email address</label>

                </div>

                <div className="form-floating mb-3">
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="name@example.com"
                    value={contraseña}
                    onChange={(e)=>{setcontraseña(e.target.value)}} />
                    <label for="floatingInput">Password</label>
                </div>

            </div>
            <div className="contendores_botones">
                <button className="botones_pagina botones_formulario" type="submit" >Login</button>
                <button className="botones_pagina botones_formulario segundario" type="button" onClick={() => { setlogin(!login) }} >Sing UP</button>

            </div>
        </form>

    )
}

export default FormularioLogin
