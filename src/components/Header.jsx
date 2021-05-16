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
                        <li><Link className="link_header" to="/about">About</Link></li>
                        <li><Link className="link_header" to="/about" >Ours Pricing</Link></li>
                    </ol>
                   

                </nav>



                <nav className="menu">
                    <ol>
                        <li> <Link className="botones_pagina_header">Login</Link></li>
                        <li><Link className="botones_pagina_header">Sing Up</Link></li>
                        
                    </ol>
                    
                    


                </nav>

            </div>
        </header>
    )
}

export default Header
