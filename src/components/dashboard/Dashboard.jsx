import { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { auth } from './../../Firebase'

import SeleccionadorContenidoDashboard from './SeleccionadorContenidoDashboard'
import './../../css/dashboard.css'


function Dashboard() {

    const history = useHistory()
    const [op, setop] = useState("buy")
    const [user, setuser] = useState(false)
    useEffect(() => {
        if (auth.currentUser) {
            console.log("existe un usuario")
            setuser(auth.currentUser)
            console.log(auth.currentUser)
        } else {
            console.log(auth.currentUser)
            history.push("/login")
        }
    }, [history])

    useCallback(async () => {

    }, [])
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
                </div>
                    <div className="dashboard_contenido_menu">
                        <ol className="dashboard_menu">
                            <li >
                                <button className="botones_menu_dashboard" onClick={() => { setop("buy") }}>Buy</button>
                            </li>
                            <li >
                                <button className="botones_menu_dashboard" onClick={() => { setop("orders") }}>Orders</button>
                            </li>
                            <li >
                                <button className="botones_menu_dashboard" onClick={() => { setop("ready_orders") }}>Ready Orders</button>
                            </li>
                            <li >
                                <button className="botones_menu_dashboard">Account</button>
                            </li>
                            <li >
                                <button className="botones_menu_dashboard" onClick={logOut}>Log out</button>
                            </li>
                        </ol>
                    </div>
                </div>

            </div>
            <div className="contenedor_contenido_dashboard">
                <div className="contenido_dashboard">
                
                    <SeleccionadorContenidoDashboard user={user}  op={op} />
                </div>
                </div>
          

        </div>
    ) : (<h1>cargando</h1>)
}

export default Dashboard
