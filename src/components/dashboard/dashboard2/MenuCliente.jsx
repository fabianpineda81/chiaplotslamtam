import React from 'react'

function MenuCliente({setop,logOut}) {
    return (
        <ol className="dashboard_menu">
                            <li >
                                <button className="botones_menu_dashboard" onClick={() => { setop("buy") }}>Buy</button>
                            </li>
                            <li >
                                <button className="botones_menu_dashboard" onClick={() => { setop("orders") }}>Orders</button>
                            </li>
                            <li >
                                <button className="botones_menu_dashboard" onClick={() => { setop("pending_orders") }}>pending orders</button>
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
    )
}

export default MenuCliente
