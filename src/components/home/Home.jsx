import React, { Fragment, useCallback, useEffect ,useState} from 'react'
import Hero from './Hero'
import NuestroSistema from './NuestroSistema'
import Precio from './Precio'
import {db} from './../../Firebase'

function Home() {
    const [configuraciones, setconfiguraciones] = useState({
        precioPlots: 0,
        tamañoPlots: 0,
        DescargaRetencion: 0,
        LimiteDescargas: 0,
        Soporte: 0,
        Ubucaciones: 0,
    })

    const buscarConfiguraciones = useCallback(()=>{
        const hola =async()=>{
            db.collection("configuraciones").doc("configuracionesGenerales").onSnapshot((doc)=>{
                setconfiguraciones(doc.data())
                console.log("doc",doc.data())
                
            })

        }
        hola()
    },[])

    useEffect(()=>{
        buscarConfiguraciones()
    },[buscarConfiguraciones])
    
    return (
        <Fragment>
            <Hero/>
            <NuestroSistema/>
            <Precio configuraciones={configuraciones}/>
        
        </Fragment>
        
            
        
    )
}

export default Home
