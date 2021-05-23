import React, { useState } from 'react'

function ReadyOrdes() {
    const [ordenes/* , setordenes */] = useState([])
    return (
        <div className="contenedor_contenido">
             <div  className={`contenedor_blanco contenedor_verde`}>
                 <h3 className="titulo_contenido">Ready Orders</h3>
                {
                    ordenes.length>0?(
                        <div>

                        </div>
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
