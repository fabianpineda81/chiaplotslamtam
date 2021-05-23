import React from 'react'
import Buy from './Buy';
import Orders from './Orders'
import ReadyOrdes from './ReadyOrdes';

function SeleccionadorContenidoDashboard({op,user}) {
    switch(op){
        case "orders":
            return <Orders  user={user}/>
            case undefined:
                return "hola";

         case "ready_orders":
             return <ReadyOrdes user={user}/>   
            
          case "buy":
              return <Buy user={user} />   
         default :
        
         return <Orders user={user} />
         ;   
    }
}

export default SeleccionadorContenidoDashboard
