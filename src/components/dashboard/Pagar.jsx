import React, { useState, useRef } from 'react'
import imgPagar from './../../imagenes/imagen_pagar.svg'
import { Form } from 'react-bootstrap';
import {storage} from './../../Firebase'
    
function Pagar({datos,setdatos,subirCompra}) {
    const [nombreArchivo, setnombre_archivo] = useState(["Ningun documento seleccionado"])
    const [archivo, setarchivo] = useState(null)
    const [link, setlink] = useState("jajaskskakjkansakosclwdjkdj.com")
    const linkInput = useRef(null)


    const cambiar_nombre = (event) => {
        
        let nombre = event.target.files[0].name
        setnombre_archivo(nombre)
        setarchivo(event.target.files[0])
        
        /*       console.log(nombre) */

    }

    const accionCopiar = () => {

        linkInput.current.select()
        document.execCommand("copy")
    }
    const verProgreso=(snapshot)=> {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused': // or 'paused'
            console.log('Upload is paused');
            break;
          case 'running': // or 'running'
            console.log('Upload is running');
            break;
            default:
                break;
        }
      }
      const verError=(error)=>{
      
      }

      const TerminoCarga=(tarea)=>{
        
            // Upload completed successfully, now we can get the download URL
            tarea.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL);
              let compra={
                ...datos,
                linkArchivo:downloadURL

              }
              setdatos(compra)
              subirCompra(compra)
              
            });
        
      }

    const procesarDatos= async(e)=>{
        e.preventDefault()
        let  storageRef = storage.ref("documentosPagos/"+nombreArchivo);
        try {
         let tarea= storageRef.put(archivo)
        // esta funcion recibe 3 funciones como parametros y una que esta atenta a los cambio otra a los errores y otra que la hace cuando termina
         tarea.on('state_changed',verProgreso ,verError,()=>{ TerminoCarga(tarea) });
            
            
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <div className="contenedor_contenido" >
                
            {/* este es el contenedor hijo (es que se pinta de blanco) este puede tener hermanos*/}

            <div className="contenedor_blanco">
                

                    <form onSubmit={procesarDatos} >

                    <div className="contenedor_img_qr">
                        <img className="imagen_qr" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Codigo_QR.svg/1200px-Codigo_QR.svg.png" alt="imagen_qr" />
                    </div>
                    <div className="contenedor_descripcion_qr">
                        <small id="emailHelp" className="form-text text-muted descripcion_imagen_qr">USDT Scan the following QR code</small>
                    </div>

                    <div className=" contenedor_link">
                      <input
                            type="text"
                            className="form-control compra_input input_link "
                            value={link}
                            ref={linkInput}
                            />
                        <button className="botones_pagina boton_crear_orden  " onClick={accionCopiar} type="button">Copiar</button>

                    </div>
                    <div className="contendor_imagen_pagar">
                        <p className="titulo_imagen_pagar">USDT- TRC20</p>
                        <img src={imgPagar} alt="imagen pagar" />
                    </div>
                    
                    <small id="emailHelp" className="form-text text-muted descripcion_imagen_qr ">USDT Scan the following QR code</small>

                        <Form.File
                            id="custom-file-translate-html"
                            label={nombreArchivo}
                            data-browse="Upload"
                            custom
                            onChange={cambiar_nombre}
                            />
                        <small id="emailHelp" className="form-text advertencia ">Upload payment capture * RED USDT RED TRC20 </small>
                        <small id="emailHelp" className="form-text text-muted aviso_pago ">IMPORTANT! Once the payment capture is loaded in USDT TRC20 network, in the next 24 hours you will receive the download link of your plots in your dashboard option (Ready Orders) </small>
                        <div className="contendores_botones">
                     <button className="botones_pagina " type="submit" >Confirm shipment</button>
                 </div>

                   
                            </form>
                
            </div>
        </div>

    )
}

export default Pagar
