import React, { useState } from 'react'
import SelectZonaHoraria from './../../login/SelectZonaHoraria'
import { withStyles } from '@material-ui/core/styles';

import Slider from '@material-ui/core/Slider';

const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);
function CrearOrden({ precio, settoPago, datos, setdatos, setshowModalCarga }) {




   
    const [errorFarmerKey, seterrorFarmerKey] = useState(null)
    const [errorPullkey, seterrorPullkey] = useState(null)




    const actualizarDatos = (e) => {
        setdatos({
            ...datos,
            [e.target.name]: e.target.value
        })

    }

    const porcesarDatos = (e) => {
        e.preventDefault()
        let correcto = true
        if (!datos.farmerKey.trim()) {
            seterrorFarmerKey("no puede estar vacia")
            correcto = false
        }

        if (!datos.pullKey.trim()) {
            seterrorPullkey("no puede estar vacia ")
            correcto = false
        }
        if (correcto) {
            alert("todo correcto")
            setshowModalCarga(true)
        }
    }

    const calularSubtotal = (numero) => {
        setdatos({
            ...datos,
            subtotal: numero * precio,
            numeroPlots: numero
        })

        console.log(datos.numeroPlots)
    }

    return (
        /* este es el contenedor pricipal este puede tener mas de un hijo */
        <div className="contenedor_contenido" >
            {/* este es el contenedor hijo (es que se pinta de blanco) este puede tener hermanos*/}

            <div className="contenedor_blanco">
                <form onSubmit={porcesarDatos}  >

                        <div className="mb-3">
                            <label className="form-label compra_label_input" >Farmer Key *</label>
                            <input
                                type="text"
                                className={`form-control compra_input ${errorFarmerKey && "is-invalid"}`}
                                name="farmerKey"
                                value={datos.farmerKey}
                                onChange={actualizarDatos}
                            />
                            {
                                errorFarmerKey && (<div className="invalid-feedback">
                                    {errorFarmerKey}
                                </div>)
                            }
                            <small id="emailHelp" className="form-text text-muted descripcion_compra_input">Please ensure you are using the *farmer key* mixing the keys up will make the plots invalid.</small>

                        </div>


                        <div className=" mb-3">
                            <label className="form-label compra_label_input" >Pool Key *</label>
                            <input
                                type="text"
                                className={`form-control compra_input ${errorPullkey && "is-invalid"}`}
                                name="pullKey"
                                value={datos.pullKey}
                                onChange={actualizarDatos}
                            />
                            {
                                errorPullkey && (<div className="invalid-feedback">
                                    {errorPullkey}
                                </div>)
                            }
                            <small id="emailHelp" className="form-text text-muted descripcion_compra_input">Your plots will be built using these keys.</small>
                        </div>

                        <div >
                            <p className="buy_titulo_slider">Number of plots to buy*</p>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" onChange={(e, n) => { calularSubtotal(n) }} defaultValue={5} min={5} />
                            <div className="buy_contenedor_indicadores">
                                <p className="buy_indicador">Min 5</p>
                                <p className="buy_indicador">Max 60</p>
                            </div>
                        </div>
                        <div className="contenedor_price">
                            <p className="titulo_price">
                                Price
                         </p>
                            <p className="buy_indicador">
                                {datos.subtotal} USD
                         </p>
                        </div>

                        <div className="buy_contenedor_zona_horaria">
                            <p className="titulo_zona_horaria">Download server</p>
                            <SelectZonaHoraria classname="compra_input_select" zonaHorario={datos.zonahoraria} setzonahoraria={actualizarDatos} />
                            <small id="emailHelp" className="form-text text-muted descripcion_compra_input">Choose a destination close to you, the closer the destination the faster your download will (usually) be.</small>
                        </div>


                    

                    <div className="contendores_botones">
                        <button className="botones_pagina boton_crear_orden" type="submit" >Create Order</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CrearOrden
