import React from 'react'
import { Link } from 'react-router-dom'
import './../css/header.css'

function Header() {
    return (
        <header className="header">

            <div className="contenedor">
                <Link className="logo" to="/">
                    CHIAPLOTSLATAM
                </Link>
                <nav className="menu">

                    <ol>
                        <li><Link className="link_header" to="/">Home</Link></li>
                        <li><a className="link_header" href="#about">About</a></li>
                        <li><a className="link_header" href="#Pricing" >Ours Pricing</a></li>
                    </ol>
                   

                </nav>



                <nav className="menu">
                    <ol>
                        <li> <Link className="botones_pagina_header" to="/login">Login</Link></li>
                        <li><Link className="botones_pagina_header" to="/signUp">Sing Up</Link></li>
                        
                    </ol>
                    
                    


                </nav>

            </div>
        </header>
    )
}

export default Header
