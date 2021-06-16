import React from 'react'

function MenuAdministracio({ setop, logOut,cantidadOrdenesNuevas,cantidadOrdenesPendientes,cantidadOrdenesBajar }) {

   

   

    return (
        <ol className="dashboard_menu">
            <li >
                <button className="botones_menu_dashboard" onClick={() => { setop("admin_ordenes_nuevas") }}>Ordenes nuevas <span className="notificacion_numero"> {cantidadOrdenesNuevas}</span> </button>
            </li>
            <li >
                <button className="botones_menu_dashboard" onClick={() => { setop("admin_ordenes_pendientes") }}>Ordenes pendientes <span className="notificacion_numero"> {cantidadOrdenesPendientes}</span> </button>
            </li>
            <li >
                <button className="botones_menu_dashboard" onClick={() => { setop("admin_ordenes_listas") }}>Ordenes listas</button>
            </li>
            <li >
                <button className="botones_menu_dashboard" onClick={() => { setop("admin_todas_ordenes") }}>Todas las ordenes</button>
            </li>
            <li >
                <button className="botones_menu_dashboard" onClick={() => { setop("admin_bajar_ordenes") }}>Bajar ordenes <span className="notificacion_numero"> {cantidadOrdenesBajar}</span></button>
            </li>
            <li >
                <button className="botones_menu_dashboard" onClick={() => { setop("opciones_generales_admin") }}>Opciones Generales</button>
            </li>

            <li >
                <button className="botones_menu_dashboard" onClick={logOut}>Log out</button>
            </li>
        </ol>
    )
}

export default MenuAdministracio
