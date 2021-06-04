import React from 'react'
import { Modal,Button} from 'react-bootstrap'

function ModalConfirmarCompra({settoPago,setshowModalConfirmar,showModalConfirmar,datos,confirmarCompra,cancelarCompra}) {
    
    return (
        <Modal
        show={showModalConfirmar}

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
         <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Confirmar Compra
          </Modal.Title>
        </Modal.Header> 
        <Modal.Body>
        {/* farmerKey:"",
        pullKey:"",
        subtotal:30,
        zonaHoraria:"bogota",
        linkArchivo:"",
        numeroPlots:5
        subtotal, */}
        <div className="confirmar_contendor_datos">
            <div className="confirmar_titulo_dato">farmerKey</div>
            <div className="confirmar_dato">{datos.farmerKey}</div>
            <hr/>
            <div className="confirmar_titulo_dato">pullKey</div>
            <div className="confirmar_dato">{datos.pullKey}</div>
            <hr/>
            <div className="confirmar_titulo_dato">zonaHoraria</div>
            <div className="confirmar_dato">{datos.zonaHoraria}</div>
            <hr/>
            <div className="confirmar_titulo_dato">numeroPlots</div>
            <div className="confirmar_dato">{datos.numeroPlots}</div>
            <hr/>
            <div className="confirmar_titulo_dato">subtotal</div>
            <div className="confirmar_dato">{datos.subtotal}</div>
            <hr/>



        </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={confirmarCompra}>Confirm</Button>
          <Button variant="danger" onClick={cancelarCompra} >Cancel</Button> 
         
        </Modal.Footer>
        
      </Modal>
    )
}

export default ModalConfirmarCompra
