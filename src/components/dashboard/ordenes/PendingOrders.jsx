import React from 'react'
import MostradorOrdenes from './MostradorOrdenes'

function PendingOrders({ordenes}) {
    
    return (
        <div className="contenedor_contenido" >
            {/* este es el contenedor hijo (es que se pinta de blanco) este puede tener hermanos*/}

            <div className={ordenes.length>0?("contenedor_blanco"):("contenedor_blanco contenedor_verde")}>
            <h3 className="titulo_contenido">Pending Orders</h3>
            {
                    ordenes.length>0?(
                        <MostradorOrdenes ordenPendiente={true} ordenes={ordenes}/>
                    ):(
                        <div className="contendor_mensaje">
                            <p className="mensaje">
                                NOT DATA
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PendingOrders
