import React from 'react'
import moment from 'moment'
import 'moment/locale/es'

function InformacionOrden({orden, volver,ordenPendiente,setterminarOrden}) {
    return (
        <div>
            <div className="contenedor_boton_volver">
                <button  className="botones_pagina boton_voler" onClick={volver}>Volver</button>
            </div>
            <div className="item_orden">
                <p className="item_orden_titulo">ID</p>
                <p className="item_orden_valor">{orden.id}</p>
            </div>
            <div className="item_orden">
                <p className="item_orden_titulo">Cantidad de plots</p>
                <p className="item_orden_valor">{orden.numeroPlots}</p>
            </div>
            <div className="item_orden">
                <p className="item_orden_titulo">Sub Total</p>
                <p className="item_orden_valor">{orden.subtotal}</p>
            </div>
            <div className="item_orden">
                <p className="item_orden_titulo">Fecha</p>
                <p className="item_orden_valor">{ moment(orden.fecha).format('MMMM Do YYYY, h:mm:ss a') }</p>
            </div>
            <div className="item_orden">
                <p className="item_orden_titulo">Estado </p>
                <p className="item_orden_valor">{orden.estado}</p>
            </div>
            <div className="item_orden">
                <p className="item_orden_titulo">Certificado de pago</p>
                <p className="item_orden_valor"><a target="_blank" rel="noreferrer" href={orden.linkArchivo}>Link</a></p>
            </div>
            {
                ordenPendiente===true?(
                    <div className="contenedor_boton_volver">
                <button  className="botones_pagina boton_voler" onClick={()=>{setterminarOrden(true)}}>Completar orden</button>
            </div>
                ):(
                    <div className="item_orden">
                    <p className="item_orden_titulo">Link parcela</p>
                    <p className="item_orden_valor"><a target="_blank" rel="noreferrer" href={orden.linkParcela}>Link</a></p>
                </div>
                )
            }
            
                
                  
                
            
        </div>
    )
}

export default InformacionOrden
