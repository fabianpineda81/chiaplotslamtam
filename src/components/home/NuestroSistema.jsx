import React, { useState } from 'react'
import './../../css/nuestrosistema.css'
import Instruccion from './Instruccion'
import flechaIzquierda from './../../imagenes/flecha_izquierda.svg'
import flechaDerecha from './../../imagenes/flecha_derecha.svg'
function NuestroSistema() {
    const [instruciones] = useState([
        { titulo: "1. Sign Up", descripcion: "Enter the required data, follow the steps and finish registering your account." },
        { titulo: "2. Place your order", descripcion: "Go to the option Place order, Enter the data required to purchase your plot." },
        { titulo: "3. Complete your payment", descripcion: "Once you have completed the data required to acquire your plot, you must make the payment and in the next 24 hours the download link will appear in your account." }

    ])

    const [posiciones, setposiciones] = useState([
        2, 3, 4
    ])
    const mover_izquierda = () => {
        if (posiciones[2] + 1 <= 4) {
            let resultado = posiciones.map((posicion) => {
                return posicion + 1
            })
            setposiciones(resultado)
            console.log(resultado[2])
        }




    }

    const mover_derecha = () => {

        if (posiciones[0] - 1 >= 0) {

            let resultado = posiciones.map((posicion) => {
                return posicion - 1
            })
            setposiciones(resultado)
            console.log(resultado[2])
        }


    }


    return (
        <div className="contendor_nuestro_sistema" name="about" id="about">
            <div className="contenedor">
                <div className="nuestro_sistema_contenedor_titulo">

                    <h2 className="nuestro_sistema_titulo">Our system</h2>
                    <p className="nuestro_sistema_titulo_descripcion">We have the physical structure that allows us to have a large yield and put 70 parcels up for sale a day.</p>
                </div>
                <div className="contendor_titulo_carrusel">
                    <p className="titulo_carrusel">How does it work?</p>
                </div>
                <div className="nuestro_sistema_contenedor_carrusel">
                    <Instruccion instruccion={instruciones[0]} posicion={posiciones[0]} />
                    <Instruccion instruccion={instruciones[1]} posicion={posiciones[1]} />
                    <Instruccion instruccion={instruciones[2]} posicion={posiciones[2]} />
                </div >
                <div className="contenedor_bototes_carrusel">
                    <button className="botones_pagina botones_carrusel" onClick={mover_izquierda} >
                        <img src={flechaIzquierda} alt="flecha izquierda" />
                    </button>
                    <button className="botones_pagina botones_carrusel" onClick={mover_derecha}>
                        <img src={flechaDerecha} alt="flecha derecha" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default NuestroSistema
