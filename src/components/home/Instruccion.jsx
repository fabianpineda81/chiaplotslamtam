import React,{useEffect, useState} from 'react'

function Instruccion({instruccion,posicion}) {
    const [clases] = useState([
        "pos0","pos1","pos2","pos3","pos4","pos5"
    ])
    const [clase, setclase] = useState("")
    useEffect(()=>{
        setclase(clases[posicion])
    },[clases,posicion])

    

    return (
        <div className={`contenedor_instruccion  ${clase}`} >
                <h3 className="instruccion_titulo">{instruccion.titulo}</h3>
                <p className="instruccion_descripcion">{instruccion.descripcion}</p>

        </div>
    )
}

export default Instruccion
