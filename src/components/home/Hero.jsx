import React from 'react'
import ImgRouter from './../../imagenes/router.svg'
import './../../css/hero.css'
import {Link} from 'react-router-dom'

function Hero() {
    return (
        <div className="contenedor">
            <div className="hero">

            <div className="contenedor_hero">
                <p className="texto_hero">Save time plotting your plots and buy your <span className="texto_hero_resaltado"> Chia Plots</span> </p>
                <div className="contenedor_imagen_hero">
                <img src={ImgRouter} className="imagen_hero" alt="imagen hero" />

                </div>
            </div>
            <div className="contenedor_hero_descripcion">
                <p className="hero_descripcion_texto">
                Do you want to optimize your time? Tell us how many plots you want and we will send you a download link in the next 24 hours! Buy your plot now!
                </p>

                <Link to="/login" className="botones_pagina" >
                    SING UP
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Hero
