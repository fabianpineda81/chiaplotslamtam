import React,{useState} from 'react'
import { Fragment } from 'react'
import OrdenAdmin from './OrdenAdmin'
import VistaOrdenAdmin from './VistaOrdenAdmin'
import {db} from './../../Firebase'

function MostradorOrdenesAdmin({ordenes,ordenPendiente,ordenNueva,ordenBajar,buscarOrdenesAdmin}) {
    
    const [ordenActual, setordenActual] = useState(null)

    const bajarOrden=async()=>{
        buscarOrdenesAdmin()
        await db.collection("usuarios").doc(ordenActual.userEmail).collection("ordenes").doc(ordenActual.id).update({
            linkParcela:null,
            codigoEstado:3,
            estado:"bajada"

        })
        
        volver()
    }



    const mostrarOrden= (orden)=>{
        if(ordenNueva===true){
            db.collection("usuarios").doc(orden.userEmail).collection("ordenes").doc(orden.id).update({
                visto:true 
            })
        }
        setordenActual(orden)
    }
    const volver=()=>{
        setordenActual(null)
    }

    return (
            <Fragment>


            {/* este es el contenedor hijo (es que se pinta de blanco) este puede tener hermanos*/}

         
                
                {   ordenActual===null?(
                  
                        
                
                  ordenes.map((orden, index) => {
                      return <OrdenAdmin  key={index}  orden={orden} mostrarOrden={mostrarOrden} />
                      
                    })
                
                    

                ):(

                    <VistaOrdenAdmin 
                    volver={volver} 
                    ordenBajar={ordenBajar} 
                    ordenPendiente={ordenPendiente}  
                    orden={ordenActual}
                    bajarOrden={bajarOrden} 
                    buscarOrdenesAdmin={buscarOrdenesAdmin}/>
                )
                    
            }
                
            </Fragment>
        
    )
}

export default MostradorOrdenesAdmin
