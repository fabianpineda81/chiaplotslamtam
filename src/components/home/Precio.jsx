import React from 'react'
import { Link } from 'react-router-dom'
import './../../css/Precio.css'

function Precio() {
    return (
        <div className="contenedor" id="Pricing">
            <div className="contenedor_titulo_precios">
                <p className="titulo_precios">Price</p>
            </div>
            <div className="contenedor_precios">
                <div className="precio">
                    <div className="precio_contenedor_item">
                    <p className="precio_precio">$10</p>

                    </div>
                    
                    <div className="precio_contenedor_item">
                        <p className="precio_titulo_item">tamaño</p>
                        <p className="precio_descripcion_item">32(108,9 GB)</p>
                    </div>
                    
                    <div className="precio_contenedor_item">
                        <p className="precio_titulo_item">Limite de descargas</p>
                        <p className="precio_descripcion_item">3 veces</p>
                    </div>
                    
                    <div className="precio_contenedor_item">
                        <p className="precio_titulo_item"> Soporte gratuito</p>
                        <p className="precio_descripcion_item">Gratis</p>
                    </div>
                    
                    <div className="precio_contenedor_item">
                        <p className="precio_titulo_item">Ubicaciones</p>
                        <p className="precio_descripcion_item">US</p>
                    </div>
                    
                    <div className="precio_contenedor_boton_comprar">
                        <Link to="/login" className="botones_pagina boton_comprar">BUY</Link>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Precio
