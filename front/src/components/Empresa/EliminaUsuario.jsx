/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EliminaUsuario = (props) => {

  function borrar(){
    props.borrarUsuario({"idOferta":props.oferta.id,"idVoluntario":props.usuario.idVoluntario});
    props.setShowModal();
    if(props.recargar) props.recargar();
  }

  return (
    <div>
      <Modal isOpen={props.showModal} toggle={props.setShowModal} className="login">
        <ModalHeader  className="cabeceraAzul" toggle={props.setShowModal}><h3>Eliminar voluntario</h3><h4>{props.oferta.nombre}</h4></ModalHeader>
        <ModalBody style={{textAlign:"center"}}>
          <h5>{props.usuario.name} {props.usuario.surname}</h5>
          <h5>{props.usuario.email}</h5>
          <hr />
          <p>¿Estás seguro?</p>
          



        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={borrar}>Eliminar</Button>{' '}
          <Button color="warning" onClick={props.setShowModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EliminaUsuario;