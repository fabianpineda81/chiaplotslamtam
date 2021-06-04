import React, {  useState } from 'react'

import CrearOrden from './ordenes/CrearOrden';
import Pagar from './ordenes/Pagar';
import {db} from './../../Firebase'
import 'moment/locale/es'
import ModalCarga from './ModalCarga';
import { Fragment } from 'react';
import ModalConfirmarCompra from './ModalConfirmarCompra';





function Buy({user}) {
   
    const [showModalCarga, setshowModalCarga] = useState(false)
    const [toPago, settoPago] = useState(false)
    const [showModalConfirmar, setshowModalConfirmar] = useState(false)

    const [porcentajeCarga, setporcentajeCarga] = useState(0)
    const precio=6;
    
    
    const [datos, setdatos] = useState({
        farmerKey:"",
        pullKey:"",
        subtotal:30,
        zonaHoraria:"bogota",
        linkArchivo:"",
        numeroPlots:5,
        userEmail:user.email,
        codigoEstado:0,
        estado:"orden en espera",
        linkParcela:"hola.com",
        visto:false


    })
    const confirmarCompra=()=>{
        settoPago(true)
        setshowModalConfirmar(false)
    }

    const cancelarCompra=()=>{
        setshowModalConfirmar(false)
    }

    const subirCompra=async(compra)=>{
        try {
            console.log(compra)
            compra={
                ...compra,
                fecha: Date.now()
            }
        console.log("email",user.email) 
        const data = await db.collection("usuarios").doc(user.email).collection("ordenes").add(compra)
        
        console.log("tarea enviada",data.id)
        setporcentajeCarga(100)
        } catch (error) {
            console.log(error)
        }
        
    }
    
    

    
    return (

        <Fragment>
           { toPago?(
                    <Pagar settoPago={settoPago}
                            setdatos={setdatos}
                            datos={datos}
                            subirCompra={subirCompra}
                            setporcentajeCarga={setporcentajeCarga}
                            setshowModalCarga={setshowModalCarga}
                            showModalCarga={showModalCarga}
                            
                    />
                ):(
                    <CrearOrden 
                    precio={precio}
                    datos={datos}
                    setdatos={setdatos}
                    setshowModalCarga={setshowModalConfirmar}
                    
                    settoPago={settoPago} />
            )}
            <ModalCarga
            showModalCarga={showModalCarga}
            setshowModalCarga={setshowModalCarga}
            porcentajeCarga={porcentajeCarga}
            
            />
            <ModalConfirmarCompra
                settoPago={settoPago}
                setshowModalConfirmar={setshowModalConfirmar}
                showModalConfirmar={showModalConfirmar}
                datos={datos}
                confirmarCompra={confirmarCompra}
                cancelarCompra={cancelarCompra}
                
            />
            </Fragment>
        
        )
}

export default Buy
