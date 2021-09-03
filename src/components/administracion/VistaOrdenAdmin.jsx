import React, { useState } from 'react'
import { Fragment } from 'react'

import InformacionOrden from './InformacionOrden'
import TerminarOrden from './TerminarOrden'
import {db} from './../../Firebase'



function VistaOrdenAdmin({ orden, mostrarOrden, volver, ordenPendiente,ordenBajar,bajarOrden,buscarOrdenesAdmin }) {
    const [terminarOrden, setterminarOrden] = useState(false)
    
    const CompletarOrden=async(link)=>{
        
      try {
        buscarOrdenesAdmin()
        await db.collection("usuarios").doc(orden.userEmail).collection("ordenes").doc(orden.id).update({
            codigoEstado:1,
            linkParcela:link,
            visto:true,
            fecha_entrega:Date.now(),
            estato:"entragada"
        })  
        
        
        volver()

      } catch (error) {
          console.log(error)

      }
        
    }
    return (
        <Fragment>


            {
                terminarOrden === true ? (
                   <TerminarOrden CompletarOrden={CompletarOrden}  setterminarOrden={setterminarOrden}/>
                ) : (
                    <InformacionOrden
                        volver={volver}
                        orden={orden}
                        ordenPendiente={ordenPendiente}
                        ordenBajar={ordenBajar}
                        setterminarOrden={setterminarOrden}
                        bajarOrden={bajarOrden}
                    />
                )
            }

        </Fragment>
    )
}

export default VistaOrdenAdmin
