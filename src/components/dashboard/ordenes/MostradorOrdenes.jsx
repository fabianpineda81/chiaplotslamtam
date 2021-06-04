import React from 'react'
import { Fragment,useState } from 'react'
import Orden from './Orden'
import VistaOrden from './VistaOrden'

function MostradorOrdenes({ ordenes,ordenPendiente}) {
    
    const [ordenActual, setordenActual] = useState(null)
    const mostrarOrden= (orden)=>{
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
                      return <Orden key={index}  orden={orden} mostrarOrden={mostrarOrden} />
                      
                    })
                
                    

                ):(

                    <VistaOrden volver={volver} ordenPendiente={ordenPendiente} orden={ordenActual}/>
                )
                    
            }
                
            </Fragment>
        
    )
}

export default MostradorOrdenes
