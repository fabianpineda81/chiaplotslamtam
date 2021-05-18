import React,{useState} from 'react'

import './../../css/Login.css'
import FormularioLogin from './FormularioLogin'
import FormularioRegistro from './FormularioRegistro'

function Login({log}) {
    const [login, setlogin] = useState(log)
    const to_login=async(e)=>{
        e.preventDefault()
        alert("login")
    }

    const registrar=async(e)=>{
        e.preventDefault()
        alert("registrar")
    }
    return (
        

            <div className="contenedor_formulario_padre">
        <div className="contenedor">
            <div className="contenedor_formulario">

                <div className="formulario_contenedor_titulos">
                    <h2 className="titulo_formulario mb-4">CHIAPLOTSLATAM</h2>
                    <h3 className="subtitulo_formulario mb-3">Sign up</h3>
                </div>
           

           {
               login?<FormularioLogin login={login}  setlogin={setlogin}/>:<FormularioRegistro login={login}  setlogin={setlogin}/>
            }
            
            
            </div>
            </div>
        </div>
            
    )
}

export default Login
