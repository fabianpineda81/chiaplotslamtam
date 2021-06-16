import React, { useEffect, useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import { auth, db } from '../../Firebase'
import Dashboard from '../dashboard/dashboard2/Dashboard'



function Administracion() {
    const [ordenes, setordenes] = useState(null)
    const history = useHistory()
    const buscarInformacionUsuario = async () => {
        try {
            let usuario = await db.collection("usuarios").doc(auth.currentUser.email).get()
            console.log(usuario.data().rol)
            return usuario.data();

        } catch (error) {
            console.log(error)
        }
    }

    const buscarOrdenesUsuario = async (doc) => {
        let resultado = await db.collection("usuarios").doc(doc.id).collection("ordenes").get()
       

        if (resultado.docs[0] !== undefined) {

            let arrayOrdenes = resultado.docs.map((doc) => {
                return ({ id: doc.id, ...doc.data() })
            })

            return arrayOrdenes

        } else {
            return null
        }
    }
   

    const buscarOrdenes = useCallback( async () => {
       

        const data = await db.collection("usuarios").get()
        
       const totalPrueba=  data.docs.map(async (doc) => {
            console.log(doc.id)

            let resultadoUsario = await buscarOrdenesUsuario(doc)

            if (resultadoUsario !== null) {
                
                return resultadoUsario
                
            }else{
                return []
            }
        })
        const respuestaTotal=await Promise.all(totalPrueba)
        let  ordenesTotales=[]
        respuestaTotal.forEach((res)=>{
                ordenesTotales=[ ...ordenesTotales,...res] 
                
                
        })  
        console.log("ordenes administracion",ordenesTotales)
        setordenes(ordenesTotales)
        
    },[])
   /*  const escuchadorUsuarios=()=>{
        db.collection("usuarios").onSnapshot(()=>{
            
            alert("cambio")
        })
    } */
    const verificarUsuario = useCallback(

        () => {

            async function hola() {
                if (auth.currentUser) {
                    const informacionUsuario = await buscarInformacionUsuario()
                    console.log(informacionUsuario)
                    if (informacionUsuario.rol === 1) {
                        console.log("es administrador")
                        buscarOrdenes()
                    } else {

                        console.log("no  es administrador")
                        history.push("/")
                    }
                } else {
                    history.push("/")
                }
            }
            hola()
        }, [history,buscarOrdenes])


    useEffect(
        () => {
        verificarUsuario()
        

    }, [verificarUsuario])


    return ordenes !== null ? (
        <Dashboard administracion={true} ordenesAdmin={ordenes} buscarOrdenesAdmin={buscarOrdenes}/>
           
    ) :
        (<h1>Cargando</h1>)
}

export default Administracion
