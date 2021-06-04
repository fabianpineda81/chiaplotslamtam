import React from 'react'
import signoMas from './../../../imagenes/signo_mas.svg'
function Orders() {
    return (
        /* este es el contenedor pricipal este puede tener mas de un hijo */
        <div className="contenedor_contenido" >
            {/* este es el contenedor hijo (es que se pinta de blanco) este puede tener hermanos*/}

        <div  className="contenedor_blanco">
            
            <h3 className="titulo_contenido">Orders</h3>
            <div className="contenedor_resultados">
                <div className="item_resultado">
                        <p className="titulo_resultado">Total plots generated</p>
                        <p className="resultado">0</p>
                </div>
                <div className="item_resultado">
                        <p className="titulo_resultado">Total plots GB</p>
                        <p className="resultado">0</p>
                </div>
                <div className="item_resultado">
                        <p className="titulo_resultado">Cost</p>
                        <p className="resultado">0</p>
                </div>

            </div>
        
        </div>
            <div className="contenedor_boton_buy">
                <button className="boton_buy"><img src={signoMas} alt="sig mas"/></button>
            </div>
        </div>
            
    )
}

export default Orders
