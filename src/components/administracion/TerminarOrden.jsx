import React,{useState} from 'react'

function TerminarOrden({ setterminarOrden,CompletarOrden }) {
    const [linkParcela, setlinkParcela] = useState("")


    const porcesarDatos=(e)=>{
        let correcto = true
        e.preventDefault()
        if(!linkParcela.trim()){
            seterrorLinkParcela("no puede estar vacio")
            correcto=false
        }
        if(correcto){
            seterrorLinkParcela(null)
            console.log("correcto")
            
            CompletarOrden(linkParcela)
        }else{
            console.log("incorrecto")
        }
        
        
    }
    const [errorLinkParcela, seterrorLinkParcela] = useState(null)
    return (
        <div>
            <form onSubmit={porcesarDatos}  >

                <div className="mb-3">
                    <label className="form-label compra_label_input" >Link Parcela *</label>
                    <input
                        type="text"
                        className={`form-control compra_input ${errorLinkParcela && "is-invalid"}`}
                        name="linkParcela"
                        value={linkParcela}
                        onChange={(e)=>{setlinkParcela(e.target.value)}}
                    />
                    {
                        errorLinkParcela && (<div className="invalid-feedback">
                            {errorLinkParcela}
                        </div>)
                    }
                    

                </div>


                



                <div className="contendores_botones">
                    <button className="botones_pagina boton_crear_orden" type="submit" >Completar</button>
                    <button className="botones_pagina boton_crear_orden" type="button" onClick={()=>{setterminarOrden(false)}} >Volver</button>
                </div>
                
            </form>
        </div>
    )
}

export default TerminarOrden
