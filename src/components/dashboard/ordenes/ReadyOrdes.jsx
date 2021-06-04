import React from 'react'
import MostradorOrdenes from './MostradorOrdenes'

function ReadyOrdes({ordenes}) {
    
    return (
        <div className="contenedor_contenido">
             <div  className={ordenes.length>0?("contenedor_blanco"):("contenedor_blanco contenedor_verde")}>
                 <h3 className="titulo_contenido">Ready Orders</h3>
                {
                    ordenes.length>0?(
                        
                    
                        <MostradorOrdenes ordenPendiente={false} ordenes={ordenes}/>
                      
                    
                        
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

export default ReadyOrdes
