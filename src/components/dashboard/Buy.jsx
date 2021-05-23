import React, { useEffect, useState } from 'react'

import CrearOrden from './CrearOrden';
import Pagar from './Pagar';
import {db} from './../../Firebase'
import 'moment/locale/es'





function Buy({user}) {
   
    
    
    
    const precio=6;
    const [datos, setdatos] = useState({
        farmerKey:"",
        pullKey:"",
        subtotal:30,
        zonaHoraria:"bogota",
        linkArchivo:"",
        numeroPlots:5,
        userEmail:user.email

    })

    const subirCompra=async(compra)=>{
        try {
            console.log(compra)
            compra={
                ...compra,
                fecha: Date.now()
            }
        console.log("email",user.email) 
        const data = await db.collection("usuarios").doc(user.email).collection("ordenesEspera").add(compra)
        const data2 = await db.collection("usuarios").doc(user.email).collection("ordeneslista").add(compra)
        console.log("tarea enviada",data.id)
        alert("compra enviada correctamente")    
        } catch (error) {
            console.log(error)
        }
        
    }
    
    
    const [toPago, settoPago] = useState(false)

    
    return (

        
            toPago?(
                    <Pagar settoPago={settoPago}
                            setdatos={setdatos}
                            datos={datos}
                            subirCompra={subirCompra}
                    />
                ):(
                    <CrearOrden 
                    precio={precio}
                    datos={datos}
                    setdatos={setdatos}
                    
                    
                    settoPago={settoPago} />
            )
        
        )
}

export default Buy
