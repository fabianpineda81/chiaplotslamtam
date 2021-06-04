import React, { useEffect, useState } from 'react'
import { db } from './../../Firebase'

function OpcionesGenerales() {
    useEffect(() => {
        const hola = async() => {
            const resultado = await db.collection("configuraciones").doc("configuracionesGenerales").get()
            console.log(resultado.data())
            setconfiguraciones(resultado.data())
        }
        hola()
    }, [])
    const [configuraciones, setconfiguraciones] = useState({
        precioPlots: 0,
        tamañoPlots: 0,
        DescargaRetencion: 0,
        LimiteDescargas: 0,
        Soporte: 0,
        Ubucaciones: 0,

    })

    const [erroresconfiguraciones, seterroresconfiguraciones] = useState({
        precioPlots: null,
        tamañoPlots: null,
        DescargaRetencion: null,
        LimiteDescargas: null,
        Soporte: null,
        Ubucaciones: null
    })


    const actualizarDatos = (e) => {
        setconfiguraciones({
            ...configuraciones,
            [e.target.name]: e.target.value
        })

    }

    const limpiarErrores = () => {
        let copiaErrores = { ...erroresconfiguraciones };
        for (const property in erroresconfiguraciones) {
            copiaErrores[property] = null
        }

        console.log("errores", copiaErrores)

        return copiaErrores;

    }

    const porcesarDatos = async (e) => {
        e.preventDefault()
        let correcto = true
        let copiaErrores = limpiarErrores()



        for (const property in configuraciones) {
            const valor = configuraciones[property];
            if (!`${valor}`.trim()) {


                copiaErrores[property] = `El campo ${property} es obligatorio`


                console.log(copiaErrores)
                correcto = false;
                console.log(`${property}: ${configuraciones[property]}`);

            }

            /* console.log("valor",`${valor}`.trim()) */
        }

        seterroresconfiguraciones(copiaErrores)





        if (correcto) {
            await db.collection("configuraciones").doc("configuracionesGenerales").set(configuraciones)
            alert("modificado correctamente")
        }
    }

    return (
        <div className="contenedor_contenido" >
            {/* este es el contenedor hijo (es que se pinta de blanco) este puede tener hermanos*/}

            <div className="contenedor_blanco">

                <form onSubmit={porcesarDatos}  >

                    <div className="mb-3">
                        <label className="form-label compra_label_input" >Precio plots</label>
                        <input
                            type="number"
                            className={`form-control compra_input ${erroresconfiguraciones.precioPlots && "is-invalid"}`}
                            name="precioPlots"
                            value={configuraciones.precioPlots}
                            onChange={actualizarDatos}
                        />
                        {
                            erroresconfiguraciones.precioPlots && (<div className="invalid-feedback">
                                {erroresconfiguraciones.precioPlots}
                            </div>)
                        }


                    </div>

                    <div className="mb-3">
                        <label className="form-label compra_label_input" >Tamaño plots</label>
                        <input
                            type="number"
                            className={`form-control compra_input ${erroresconfiguraciones.tamañoPlots && "is-invalid"}`}
                            name="tamañoPlots"
                            value={configuraciones.tamañoPlots}
                            onChange={actualizarDatos}
                        />
                        {
                            erroresconfiguraciones.tamañoPlots && (
                                <div className="invalid-feedback">
                                    {erroresconfiguraciones.tamañoPlots}
                                </div>)
                        }





                    </div>

                    <div className="mb-3">
                        <label className="form-label compra_label_input" >DescargaRetencion</label>
                        <input
                            type="text"
                            className={`form-control compra_input ${erroresconfiguraciones.DescargaRetencion && "is-invalid"}`}
                            name="DescargaRetencion"
                            value={configuraciones.DescargaRetencion}
                            onChange={actualizarDatos}
                        />
                        {
                            erroresconfiguraciones.DescargaRetencion && (
                                <div className="invalid-feedback">
                                    {erroresconfiguraciones.DescargaRetencion}
                                </div>)
                        }

                    </div>





                    <div className="mb-3">
                        <label className="form-label compra_label_input" >LimiteDescargas</label>
                        <input
                            type="numer"
                            className={`form-control compra_input ${erroresconfiguraciones.LimiteDescargas && "is-invalid"}`}
                            name="LimiteDescargas"
                            value={configuraciones.LimiteDescargas}
                            onChange={actualizarDatos}
                        />
                        {
                            erroresconfiguraciones.LimiteDescargas && (
                                <div className="invalid-feedback">
                                    {erroresconfiguraciones.LimiteDescargas}
                                </div>)
                        }

                    </div>
                    <div className="mb-3">
                        <label className="form-label compra_label_input" >Soporte</label>
                        <input
                            type="text"
                            className={`form-control compra_input ${erroresconfiguraciones.Soporte && "is-invalid"}`}
                            name="Soporte"
                            value={configuraciones.Soporte}
                            onChange={actualizarDatos}
                        />
                        {
                            erroresconfiguraciones.Soporte && (
                                <div className="invalid-feedback">
                                    {erroresconfiguraciones.Soporte}
                                </div>)
                        }

                    </div>

                    <div className="mb-3">
                        <label className="form-label compra_label_input" >Ubucaciones</label>
                        <input
                            type="text"
                            className={`form-control compra_input ${erroresconfiguraciones.Ubucaciones && "is-invalid"}`}
                            name="Ubucaciones"
                            value={configuraciones.Ubucaciones}
                            onChange={actualizarDatos}
                        />
                        {
                            erroresconfiguraciones.Ubucaciones && (
                                <div className="invalid-feedback">
                                    {erroresconfiguraciones.Ubucaciones}
                                </div>)
                        }

                    </div>



                    <div className="contendores_botones">
                        <button className="botones_pagina boton_crear_orden" type="submit" >Create Order</button>
                    </div>
                </form>



            </div>
        </div>
    )
}

export default OpcionesGenerales
