import React from 'react'
import MostradorOrdenesAdmin from './MostradorOrdenesAdmin'

function AdminOrdenesPendientes({ordenes,buscarOrdenesAdmin}) {
    return (
        <div className="contenedor_contenido" >
            {/* este es el contenedor hijo (es que se pinta de blanco) este puede tener hermanos*/}

            <div  className={ordenes.length>0?("contenedor_blanco"):("contenedor_blanco contenedor_verde")}>
            <h3 className="titulo_contenido">Orden pendientes admin</h3>
            {
                    ordenes.length>0?(
                        <MostradorOrdenesAdmin ordenPendiente={true} ordenes={ordenes} buscarOrdenesAdmin={buscarOrdenesAdmin}/>
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

export default AdminOrdenesPendientes
