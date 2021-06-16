import React from 'react'
import moment from 'moment'
import 'moment/locale/es'

function OrdenAdmin({orden,mostrarOrden}) {
    return (
        <div>
            <div className="orden" onClick={() => { mostrarOrden(orden) }} >

                <div className="contenedor_item_resumen">

                    <div className="item_orden_resumen ancho_60">
                        <p className="item_orden_titulo_resumen">ID</p>
                        <p className="item_orden_valor_resumen">{orden.id}</p>
                    </div>
                    <div className="item_orden_resumen ancho_40">
                        <p className="item_orden_titulo_resumen">fecha</p>
                        <p className="item_orden_valor_resumen">{moment(orden.fecha_compra).format('MMMM Do YYYY')}</p>
                    </div>
                </div>
                <div className="contenedor_item_resumen">

                    <div className="item_orden_resumen ancho_60">
                        <p className="item_orden_titulo_resumen">Cantidad de plots</p>
                        <p className="item_orden_valor_resumen">{orden.numeroPlots}</p>
                    </div>
                    <div className="item_orden_resumen ancho_40">
                        <p className="item_orden_titulo_resumen">Sub total</p>
                        <p className="item_orden_valor_resumen">{orden.subtotal}</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default OrdenAdmin
