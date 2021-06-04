import React from 'react'
import AdminOrdenesListas from '../administracion/AdminOrdenesListas';
import AdminOrdenesNuevas from '../administracion/AdminOrdenesNuevas';
import AdminOrdenesPendientes from '../administracion/AdminOrdenesPendientes';
import OpcionesGenerales from '../administracion/OpcionesGenerales';
import TodasOrdenes from '../administracion/TodasOrdenes';
import Buy from './Buy';
import Orders from './ordenes/Orders'
import PendingOrders from './ordenes/PendingOrders';
import ReadyOrdes from './ordenes/ReadyOrdes';

function SeleccionadorContenidoDashboard({op,user,ordenes,ordenesListas,ordenesPendientes,ordenesNuevas}) {
    switch(op){
        case "orders":
            return <Orders  user={user}/>
            case undefined:
                return "hola";

         case "ready_orders":
             return <ReadyOrdes ordenes={ordenesListas} user={user}/>   
            
          case "buy":
              return <Buy user={user} />   

          case "pending_orders":
              return <PendingOrders ordenes={ordenesPendientes} user={user}/>   
         case "admin_ordenes_listas" :

             return <AdminOrdenesListas ordenes={ordenesListas}/>
         case "admin_ordenes_pendientes":
             
             return <AdminOrdenesPendientes ordenes={ordenesPendientes}/>
             case "admin_ordenes_nuevas":
             
                return <AdminOrdenesNuevas ordenes={ordenesNuevas}/>

        case "admin_todas_ordenes":
            return <TodasOrdenes ordenes={ordenes}/>
        case "opciones_generales_admin":
               return <OpcionesGenerales/>
            

         default :
        
         return <Orders user={user} />
         ;   
    }
}

export default SeleccionadorContenidoDashboard
