import React, { useCallback, useEffect,useState } from 'react'
import { useHistory } from 'react-router'
import {db,auth} from './../../Firebase'

function Dashboard() {
    
    const history = useHistory()
    const [user, setuser] = useState(false)
    useEffect(()=>{
        if(auth.currentUser){
                console.log("existe un usuario")
                setuser(auth.currentUser)
        }else{
            console.log("No existe usuario")
            history.push("/login")
        }
    },[history])

    useCallback(async()=>{

    },[])
    
    return user!==false? (
        <div>
                <h1>{user.uid}</h1>
        </div>
    ):(<h1>cargando</h1>)
}

export default Dashboard
