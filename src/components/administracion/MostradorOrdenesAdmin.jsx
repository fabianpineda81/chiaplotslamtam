import React,{useState} from 'react'
import { Fragment } from 'react'
import OrdenAdmin from './OrdenAdmin'
import VistaOrdenAdmin from './VistaOrdenAdmin'
import {db} from './../../Firebase'

function MostradorOrdenesAdmin({ordenes,ordenPendiente,ordenNueva}) {
    
    const [ordenActual, setordenActual] = useState(null)
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

                    <VistaOrdenAdmin volver={volver} ordenPendiente={ordenPendiente}  orden={ordenActual}/>
                )
                    
            }
                
            </Fragment>
        
    )
}

export default MostradorOrdenesAdmin
