import React from 'react'
import { Fragment } from 'react'
import { Modal,Button,ProgressBar} from 'react-bootstrap'

function ModalCarga({setshowModalCarga,showModalCarga,porcentajeCarga,setop}) {
    return (
        
        <Modal
        show={showModalCarga}

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
         <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
          {
              porcentajeCarga>=100?(
                "Compra realizada correctamente"
                ):
                (
                    "Cargando compra"
                )

          }
          </Modal.Title>
        </Modal.Header> 
        <Modal.Body>
        {
            porcentajeCarga>=100?(
                <Fragment>
                <h3>Links habilitados en 24 horas</h3>
                <Button variant="success"  disabled={porcentajeCarga>=100?false:true}
                 onClick={()=>{
                   setshowModalCarga(!showModalCarga)
                   setop("pending_orders")
                   }}>
                Close
              </Button>

                </Fragment>
            ):(
                <ProgressBar variant="success" animated now={porcentajeCarga} label={`${porcentajeCarga}%`} />
            )
        }
         
        </Modal.Body>
        
        
      </Modal>

            
        
    )
}

export default ModalCarga
