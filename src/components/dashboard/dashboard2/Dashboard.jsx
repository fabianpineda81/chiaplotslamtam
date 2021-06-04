import { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { auth,db } from '../../../Firebase'

import SeleccionadorContenidoDashboard from '../SeleccionadorContenidoDashboard'
import './../../../css/dashboard.css'
import MenuAdministracio from './MenuAdministracio'
import MenuCliente from './MenuCliente'
import ImgRefresco from './../../../imagenes/ImagenRefresco.jpg'


function Dashboard({administracion,ordenesAdmin,buscarOrdenesAdmin}) {
    const [ordenes , setordenes] = useState([])
    const [ordenesNuevas, setordenesNuevas] = useState([])
    const [ordenesListas, setordenesListas] = useState([])
    const [ordenesPendientes, setordenesPendientes] = useState([])
    const [user, setuser] = useState(false)
    const history = useHistory()
    const [op, setop] = useState("buy")

   
   
    const filtrarOrdenes = useCallback(
        () => {

            let pendientes = ordenesAdmin.filter((orden) => (orden.codigoEstado !== 1))
            let listas = ordenesAdmin.filter((orden) => (orden.codigoEstado !== 0))
            let arrayOrdenesNuevas = ordenesAdmin.filter(orden =>orden.visto===false)
            setordenesNuevas(arrayOrdenesNuevas)
            setordenesListas(listas)
            setordenesPendientes(pendientes)
            console.log("filtrado")
        }
        , [ordenesAdmin])


    
    
    const buscarOrdenes= useCallback(async(currectUser)=>{
        try {
            let resOrdenes=await db.collection("usuarios").doc(currectUser.email).collection("ordenes").get()
            setuser(currectUser)
            if(resOrdenes.docs[0]!==undefined){
                
    
                let arrayOrder= resOrdenes.docs.map((orden)=>{
                    return ({id:orden.id,...orden.data()})
                })
                 actualizarOrdenes(arrayOrder)

               

            }else{
                setordenes([])
                actualizarOrdenes([])

            }
            
        } catch (error) {
            console.log(error)
        }
    },[setordenes]) 

    
    const buscarOrdenes1=useCallback( (currectUser)=>{
        if(administracion===false){

            db.collection("usuarios").doc(auth.currentUser.email).collection("ordenes")
            .onSnapshot( (doc) => {
                buscarOrdenes(currectUser)
                
            } )
            
        }else{
            filtrarOrdenes()
        }
        setuser(currectUser)
    },[buscarOrdenes,administracion,filtrarOrdenes])
    


    
    const actualizarOrdenes=(arrayOrder)=>{
       
        let arrayOrdenesPendientes= arrayOrder.filter(orden=>orden.codigoEstado===0)
        let arrayOrdenesListas= arrayOrder.filter(orden=>orden.codigoEstado===1)
        arrayOrdenesListas!==undefined?(setordenesListas(arrayOrdenesListas)):(setordenesListas([]))
        arrayOrdenesPendientes!==undefined?(setordenesPendientes(arrayOrdenesPendientes)):(setordenesPendientes([]))
        
        
        setordenes(arrayOrder)
    }

     
    


    useEffect( () => {
        const currectUser= auth.currentUser
        if (currectUser) {
            
            buscarOrdenes1(currectUser) 
        } else {
            console.log(auth.currentUser)
            history.push("/login")
        }
    }, [history,buscarOrdenes1,filtrarOrdenes])

    
    const logOut = () => {
        auth.signOut();
        history.push("/")
    }

    return user !== false ? (
        <div className="contenedor_dashboard">

            <div className="contenedor_menu_dashboard">
                <div className="contenedor_menu">
                    <div className="dashboard_titulo_menu">
                        Dashboard 
                       {administracion?(  <img src={ImgRefresco} onClick={buscarOrdenesAdmin}  width={50} height={50} alt="" className="img_refrescar_ordenes"  title="Refresacar ordenes" />):(null)} 
                </div>
                    <div className="dashboard_contenido_menu">
                        {
                            administracion?(
                                <MenuAdministracio 
                                ordenes={ordenesAdmin} 
                                setop={setop} 
                                logOut={logOut} 
                                cantidadOrdenesNuevas={ordenesNuevas.length}
                                cantidadOrdenesPendientes={ordenesPendientes.length} 
                                buscarOrdenesAdmin={buscarOrdenesAdmin} />
                            ):(
                                <MenuCliente setop={setop} logOut={logOut} />
                            )
                        }
                    </div>
                </div>

            </div>
            <div className="contenedor_contenido_dashboard">
                <div className="contenido_dashboard">
                
                    <SeleccionadorContenidoDashboard 
                    ordenes={ordenes} 
                    ordenesListas={ordenesListas} 
                    ordenesPendientes={ordenesPendientes}
                    ordenesNuevas={ordenesNuevas}
                    user={user}  
                    op={op} />
                </div>
                </div>
          

        </div>
    ) : (<h1>cargando</h1>)
}

export default Dashboard
