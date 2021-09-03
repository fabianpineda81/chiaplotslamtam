import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './../css/header.css'

function Header() {
    const [activo, setactivo] = useState(false)
    const ipad= window.matchMedia('screen and (max-width:758px)'); 
   
    const toggogle_menu= ()=>{
        setactivo(!activo)
    }

    const cerrar_menu=()=>{
        if(ipad.matches){
            setactivo(false)
        }
        
    }

    return (
        <header className="header">
            <div className="contenedor ">
            <i className={`icon-menu ${true?" burger-button is-active": "burger-button"}`}  id="boton-menu"  onClick={toggogle_menu} ></i>
                <Link onClick={cerrar_menu} className="logo" to="/">
                    CHIAPLOTSLATAM
                </Link>
                <div className={`contenedor_menu_header ${activo?("contenedor_menu_header_active"):("")}`}>
                    <nav className="menu" >

                        <ol>
                            <li><Link className="link_header" onClick={cerrar_menu} to="/">Home</Link></li>
                            <li><a className="link_header" onClick={cerrar_menu} href="#about">About</a></li>
                            <li><a className="link_header" onClick={cerrar_menu} href="#Pricing" >Ours Pricing</a></li>
                        </ol>


                    </nav>



                    <nav className="menu">
                        <ol>
                            <li> <Link className="botones_pagina_header" onClick={cerrar_menu} to="/login">Login</Link></li>
                            <li><Link className="botones_pagina_header" onClick={cerrar_menu} to="/signUp">Sing Up</Link></li>

                        </ol>




                    </nav>

                </div>

            </div>
        </header>
    )
}

export default Header
